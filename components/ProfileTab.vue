<template>
  <div class="text-gray-300">
    <div class="flex flex-col space-y-6">
      <!-- Header -->
      <div class="border-b border-gray-700 pb-4">
        <h1 class="text-2xl font-bold text-blue-400">Zaid Yasyaf</h1>
        <div class="text-gray-400 mt-2">
          Indonesia • zaid.ug@gmail.com • +628112777854 • in/zaidysf
        </div>
      </div>

      <!-- Summary -->
      <div>
        <div class="text-green-400 text-xl mb-2">/** SUMMARY */</div>
        <div class="pl-4 text-gray-300">
          As a seasoned Tech Lead at Perqara, I leverage a decade of IT expertise to spearhead transformative initiatives. 
          My journey includes three managerial roles, contributing to the growth and success of leading organizations. 
          Passionate about technology, innovation, and building exceptional teams.
        </div>
      </div>

      <!-- Key Highlights -->
      <div>
        <div class="text-green-400 text-xl mb-2">/** KEY HIGHLIGHTS */</div>
        <div class="grid grid-cols-3 gap-4">
          <div class="bg-[#2d2d2d] p-4 rounded-lg border-l-2 border-blue-500">
            <div class="text-2xl font-bold text-blue-400">10+</div>
            <div class="text-gray-400">Years Experience</div>
          </div>
          <div class="bg-[#2d2d2d] p-4 rounded-lg border-l-2 border-green-500">
            <div class="text-2xl font-bold text-green-400">20+</div>
            <div class="text-gray-400">Projects Led</div>
          </div>
          <div class="bg-[#2d2d2d] p-4 rounded-lg border-l-2 border-purple-500">
            <div class="text-2xl font-bold text-purple-400">3+</div>
            <div class="text-gray-400">Leadership Roles</div>
          </div>
        </div>
      </div>

      <!-- Expertise Areas -->
      <div>
        <div class="text-green-400 text-xl mb-2">/** EXPERTISE */</div>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="(area, index) in expertiseAreas" :key="index"
               class="bg-[#2d2d2d] p-4 rounded-lg hover:bg-[#333333] transition-all">
            <div class="text-blue-400 mb-2">{{ area.title }}</div>
            <div class="text-gray-400 text-sm">{{ area.description }}</div>
          </div>
        </div>
      </div>

      <!-- Current Focus -->
      <div>
        <div class="text-green-400 text-xl mb-2">/** CURRENT FOCUS */</div>
        <div class="bg-[#2d2d2d] p-4 rounded-lg">
          <div class="text-gray-300">Currently focusing on:</div>
          <ul class="mt-2 space-y-2">
            <li v-for="(focus, index) in currentFocus" :key="index"
                class="flex items-center text-gray-400">
              <span class="text-blue-400 mr-2">•</span>
              {{ focus }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const expertiseAreas = [
  {
    title: 'Technical Leadership',
    description: 'Leading development teams, architecting solutions, and implementing best practices'
  },
  {
    title: 'Full Stack Development',
    description: 'Building scalable applications using modern technologies and frameworks'
  },
  {
    title: 'System Architecture',
    description: 'Designing robust and scalable system architectures for complex applications'
  },
  {
    title: 'Team Management',
    description: 'Mentoring teams, fostering growth, and driving successful project delivery'
  }
]

const currentFocus = [
  'Leading multiple technical squads at Perqara',
  'Developing public-facing products',
  'Optimizing development cycles and processes',
  'Implementing modern tech stacks and architectures',
  'Building and mentoring high-performing teams'
]
</script>