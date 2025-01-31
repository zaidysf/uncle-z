<template>
  <div class="text-gray-300">
    <!-- Header -->
    <div class="flex items-center mb-8 bg-[#2d2d2d] p-4 rounded-lg">
      <img src="/logos/github.svg" alt="GitHub" class="w-8 h-8 mr-4 filter invert">
      <h2 class="text-xl text-blue-400">/** GITHUB ACTIVITY */</h2>
    </div>

    <div class="space-y-8">
      <div v-for="username in githubUsernames" :key="username">
        <!-- User Header -->
        <div class="flex items-center space-x-4 mb-4">
          <img v-if="userStats[username]?.avatar_url" 
               :src="userStats[username].avatar_url" 
               :alt="username"
               class="w-12 h-12 rounded-full">
          <div>
            <a :href="`https://github.com/${username}`" 
               target="_blank"
               class="text-lg font-medium hover:text-blue-400 transition-colors">
              @{{ username }}
            </a>
            <div class="text-sm text-gray-400">{{ userStats[username]?.bio }}</div>
          </div>
        </div>
        
        <div v-if="loading[username]" class="bg-[#252526] p-4 rounded-lg">
          <div class="flex items-center space-x-3">
            <div class="animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent"></div>
            <span>Loading GitHub data...</span>
          </div>
        </div>

        <div v-else-if="errors[username]" class="bg-red-900/50 text-red-200 p-4 rounded-lg">
          <div class="font-medium mb-1">Failed to load GitHub data:</div>
          <div class="text-sm">{{ errors[username] }}</div>
        </div>

        <div v-else class="space-y-6">
          <!-- Stats Cards -->
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-[#252526] p-4 rounded-lg text-center hover:bg-[#2a2a2a] transition-colors">
              <div class="text-2xl font-bold">{{ userStats[username]?.public_repos + userStats[username]?.total_private_repos || 0 }}</div>
              <div class="text-sm text-gray-400">Total Repositories</div>
            </div>
            <div class="bg-[#252526] p-4 rounded-lg text-center hover:bg-[#2a2a2a] transition-colors">
              <div class="text-2xl font-bold">{{ totalCommits[username] || 0 }}</div>
              <div class="text-sm text-gray-400">Total Commits</div>
            </div>
          </div>

          <!-- Recent Repositories -->
          <div v-if="repositories[username]?.length" class="space-y-4">
            <h3 class="text-lg text-blue-400 mb-4">Recent Repositories</h3>
            <div v-for="repo in repositories[username]" :key="repo.id" 
                 class="bg-[#252526] p-4 rounded-lg hover:bg-[#2a2a2a] transition-colors group">
              <div class="flex justify-between items-start mb-2">
                <div class="flex items-center">
                  <span class="mr-2">{{ repo.private ? '🔒' : '📂' }}</span>
                  <a :href="repo.html_url" 
                     target="_blank"
                     class="font-medium group-hover:text-blue-400 transition-colors">
                    {{ repo.name }}
                  </a>
                </div>
                <div class="flex items-center space-x-4 text-sm">
                  <span title="Stars" class="flex items-center">
                    <span class="text-yellow-500 mr-1">⭐</span>
                    {{ repo.stargazers_count }}
                  </span>
                  <span title="Forks" class="flex items-center">
                    <span class="text-green-500 mr-1">🍴</span>
                    {{ repo.forks_count }}
                  </span>
                  <span title="Commits" class="flex items-center" v-if="repoCommits[repo.full_name]">
                    <span class="text-blue-500 mr-1">📝</span>
                    {{ repoCommits[repo.full_name] }}
                  </span>
                </div>
              </div>
              <div class="text-gray-400 text-sm mb-3" v-if="repo.description">
                {{ repo.description }}
              </div>
              <div class="flex flex-wrap gap-2">
                <span v-for="lang in repoLanguages[repo.full_name]" 
                      :key="lang"
                      class="text-xs px-2 py-1 bg-[#1e1e1e] rounded-full">
                  {{ lang }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const config = useRuntimeConfig()
const githubUsernames = config.public.githubUsernames
const repositories = ref({})
const userStats = ref({})
const repoCommits = ref({})
const repoLanguages = ref({})
const totalCommits = ref({})
const errors = ref({})
const loading = ref({})

const fetchWithAuth = async (url, username) => {
  const token = username === githubUsernames[0] ? config.public.githubTokenOne : config.public.githubTokenTwo
  const response = await fetch(url, {
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  })

  // Handle rate limiting
  const remaining = response.headers.get('x-ratelimit-remaining')
  if (remaining === '0') {
    const resetTime = new Date(Number(response.headers.get('x-ratelimit-reset')) * 1000)
    throw new Error(`GitHub API rate limit exceeded. Resets at ${resetTime.toLocaleTimeString()}`)
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || `GitHub API responded with status ${response.status}`)
  }

  return { data: await response.json(), headers: response.headers }
}

const fetchUserStats = async (username) => {
  try {
    loading.value[username] = true
    // Get both public and private data
    const [publicData, privateData] = await Promise.all([
      fetchWithAuth(`https://api.github.com/users/${username}`, username),
      fetchWithAuth(`https://api.github.com/user`, username)
    ])
    
    // Merge public and private data
    userStats.value[username] = {
      ...publicData.data,
      total_private_repos: privateData.data.total_private_repos || 0
    }
  } catch (error) {
    console.error(`Error fetching user stats for ${username}:`, error)
    errors.value[username] = error.message
  }
}

const fetchRepoCommits = async (repo, username) => {
  try {
    const { data, headers } = await fetchWithAuth(`https://api.github.com/repos/${repo.full_name}/commits?per_page=1`, username)
    
    // Check for pagination info in Link header
    const linkHeader = headers.get('link')
    if (linkHeader) {
      const match = linkHeader.match(/page=(\d+)>; rel="last"/)
      if (match) {
        return parseInt(match[1])
      }
    }
    
    // If no pagination, check if we got at least one commit
    return data.length > 0 ? 1 : 0
  } catch (error) {
    // If repository is empty, return 0 silently
    if (error.message?.includes('Git Repository is empty') || 
        error.message?.includes('No commits found')) {
      return 0
    }
    // For other errors, log and return 0
    console.error(`Error fetching commits for ${repo.full_name}:`, error)
    return 0
  }
}

const fetchRepos = async (username) => {
  try {
    // Fetch both public and private repos
    const { data: allRepos } = await fetchWithAuth(`https://api.github.com/user/repos?sort=updated&per_page=100&type=all`, username)
    
    // Filter out empty repositories and get commit counts in parallel
    const nonEmptyRepos = allRepos.filter(repo => !repo.empty)
    const commitPromises = nonEmptyRepos.map(repo => fetchRepoCommits(repo, username))
    const commitCounts = await Promise.all(commitPromises)
    
    // Calculate total commits
    totalCommits.value[username] = commitCounts.reduce((sum, count) => sum + count, 0)
    
    // Take only first 5 non-empty repos for display
    const recentRepos = nonEmptyRepos.slice(0, 5)
    repositories.value[username] = recentRepos
    
    // Store commit counts for the first 5 repos
    recentRepos.forEach((repo, index) => {
      repoCommits.value[repo.full_name] = commitCounts[index]
    })
    
    // Fetch languages only for the first 5 repos
    await Promise.all(recentRepos.map(async (repo) => {
      try {
        const { data: languages } = await fetchWithAuth(`https://api.github.com/repos/${repo.full_name}/languages`, username)
        repoLanguages.value[repo.full_name] = Object.keys(languages)
      } catch (error) {
        console.error(`Error fetching languages for ${repo.full_name}:`, error)
      }
    }))
    
    return recentRepos
  } catch (error) {
    console.error(`Error fetching repos for ${username}:`, error)
    errors.value[username] = error.message
    return []
  } finally {
    loading.value[username] = false
  }
}

onMounted(async () => {
  for (const username of githubUsernames) {
    await fetchUserStats(username)
    await fetchRepos(username)
  }
})
</script>
