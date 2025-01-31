<template>
  <div class="text-gray-300">
    <h2 class="text-xl text-blue-400 mb-8">/** SKILLS */</h2>

    <!-- Technologies & Tools Cloud -->
    <div class="mb-12 p-6 bg-[#2d2d2d] rounded-lg">
      <div class="flex flex-wrap gap-4">
        <div v-for="tech in technologies" :key="tech.name"
             class="flex items-center p-3 bg-[#1e1e1e] rounded-lg hover:bg-[#333333] transition-all
                    group cursor-pointer">
          <img :src="tech.logo" :alt="tech.name" class="w-8 h-8 mr-2 group-hover:scale-110 transition-transform filter invert">
          <span>{{ tech.name }}</span>
        </div>
      </div>
    </div>
    
    <!-- Skills Categories -->
    <div class="grid grid-cols-2 gap-8">
      <div v-for="(category, index) in skills" :key="index" 
           :class="['skill-card', 'skill-card-' + index]">
        <div class="bg-[#2d2d2d] rounded-lg p-6 h-full hover:transform hover:scale-105 transition-all duration-300
                    border-l-4 hover:border-l-8"
             :class="getBorderColor(index)">
          
          <h3 class="text-lg font-bold mb-4" :class="getHeaderColor(index)">
            {{ category.title }}
          </h3>
          
          <div class="space-y-4">
            <div v-for="skill in category.skills" :key="skill.name"
                 class="skill-item">
              <div class="flex justify-between mb-1 text-sm">
                <span class="flex items-center">
                  <img :src="skill.icon" :alt="skill.name" class="w-4 h-4 mr-2 filter invert" v-if="skill.icon">
                  {{ skill.name }}
                </span>
                <span class="text-gray-400">{{ skill.level }}%</span>
              </div>
              
              <div class="h-2 bg-[#1e1e1e] rounded-full overflow-hidden">
                <div class="h-full transition-all duration-1000 rounded-full"
                     :class="getProgressColor(index)"
                     :style="{ width: skill.level + '%' }">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const technologies = [
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'Vue.js', logo: '/logos/vuedotjs.svg' },
  { name: 'Node.js', logo: '/logos/nodedotjs.svg' },
  { name: 'PHP', logo: '/logos/php.svg' },
  { name: 'Laravel', logo: '/logos/laravel.svg' },
  { name: 'Go', logo: '/logos/go.svg' },
  { name: 'Docker', logo: '/logos/docker.svg' },
  { name: 'AWS', logo: '/logos/amazonwebservices.svg' },
  { name: 'GCP', logo: '/logos/googlecloud.svg' },
  { name: 'Redis', logo: '/logos/redis.svg' },
  { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
  { name: 'MongoDB', logo: '/logos/mongodb.svg' },
  { name: 'GraphQL', logo: '/logos/graphql.svg' },
  { name: 'tRPC', logo: '/logos/trpc.svg' }
]

const skills = [
  {
    title: 'Industry Knowledge',
    skills: [
      { name: 'Software Development', level: 95 },
      { name: 'SaaS', level: 90 },
      { name: 'MLM Systems', level: 85 },
      { name: 'Fintech Applications', level: 88 },
      { name: 'Forex Trading Systems', level: 82 }
    ]
  },
  {
    title: 'Programming',
    skills: [
      { name: 'PHP (Laravel/Lumen)', level: 95, icon: '/logos/php.svg' },
      { name: 'JavaScript/TypeScript', level: 92, icon: '/logos/typescript.svg' },
      { name: 'Go', level: 85, icon: '/logos/go.svg' },
      { name: 'Node.js', level: 90, icon: '/logos/nodedotjs.svg' },
      { name: 'HTML/CSS', level: 88, icon: '/logos/htmx.svg' }
    ]
  },
  {
    title: 'Tools & Frameworks',
    skills: [
      { name: 'Redis', level: 90, icon: '/logos/redis.svg' },
      { name: 'GraphQL', level: 85, icon: '/logos/graphql.svg' },
      { name: 'tRPC', level: 88, icon: '/logos/trpc.svg' },
      { name: 'AWS', level: 92, icon: '/logos/amazonwebservices.svg' },
      { name: 'GCP', level: 85, icon: '/logos/googlecloud.svg' }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 92, icon: '/logos/postgresql.svg' },
      { name: 'MySQL', level: 95, icon: '/logos/mysql.svg' },
      { name: 'MongoDB', level: 88, icon: '/logos/mongodb.svg' },
      { name: 'Redis', level: 90, icon: '/logos/redis.svg' },
      { name: 'ElasticSearch', level: 85, icon: '/logos/elasticsearch.svg' }
    ]
  }
]

const colors = {
  borders: ['border-blue-500', 'border-green-500', 'border-purple-500', 'border-yellow-500'],
  headers: ['text-blue-400', 'text-green-400', 'text-purple-400', 'text-yellow-400'],
  progress: ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-yellow-500']
}

const getBorderColor = (index) => colors.borders[index % colors.borders.length]
const getHeaderColor = (index) => colors.headers[index % colors.headers.length]
const getProgressColor = (index) => colors.progress[index % colors.progress.length]
</script>

<style scoped>
.skill-item {
  animation: slideIn 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.skill-card {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.skill-card-0 { animation-delay: 0ms; }
.skill-card-1 { animation-delay: 200ms; }
.skill-card-2 { animation-delay: 400ms; }
.skill-card-3 { animation-delay: 600ms; }
</style>
