<template>
  <div class="text-gray-300">
    <h2 class="text-xl text-blue-400 h-6 leading-6 mb-8">/** EDUCATION */</h2>

    <div class="relative pb-12">
      <!-- Main Education Card -->
      <div class="bg-[#2d2d2d] rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300
                  border-l-4 border-blue-500 hover:border-l-8">
        <div class="flex items-start">
          <!-- University Logo/Icon -->
          <div class="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mr-6">
            <svg class="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M12 14v7"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4.5 12l7.5 4 7.5-4"/>
            </svg>
          </div>

          <!-- Education Details -->
          <div class="flex-1">
            <h3 class="text-lg font-bold text-green-400">Bachelor's degree, Information Technology</h3>
            <p class="text-gray-400 mt-2">Universitas Gunadarma</p>
            <p class="text-gray-500">Graduated: 2015</p>

            <!-- Skills/Courses Tags -->
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="course in courses" :key="course"
                    class="px-3 py-1 text-sm rounded-full bg-opacity-20"
                    :class="getRandomCourseStyle()">
                {{ course }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Certifications -->
      <div class="mt-8">
        <h3 class="text-lg text-purple-400 mb-4">/** Additional Certifications */</h3>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="cert in certifications" :key="cert.name"
               class="bg-[#2d2d2d] p-4 rounded-lg hover:bg-[#333333] transition-all cursor-pointer
                      border-l-2 border-purple-500 hover:border-l-4">
            <div class="flex items-center">
              <div class="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-purple-500/20">
                <span class="text-purple-400">{{ cert.icon }}</span>
              </div>
              <div>
                <h4 class="font-medium">{{ cert.name }}</h4>
                <p class="text-sm text-gray-400">{{ cert.issuer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const courses = [
  'Data Structures',
  'Algorithms',
  'Software Engineering',
  'Database Systems',
  'Web Development',
  'Network Security',
  'Operating Systems',
  'Software Architecture'
]

const certifications = [
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', icon: '☁️' },
  { name: 'Professional Scrum Master', issuer: 'Scrum.org', icon: '🔄' },
  { name: 'Google Cloud Engineer', issuer: 'Google Cloud', icon: '☁️' },
  { name: 'Laravel Certified Developer', issuer: 'Laravel', icon: '🚀' }
]

const courseStyles = [
  'bg-blue-500 text-blue-300',
  'bg-green-500 text-green-300',
  'bg-purple-500 text-purple-300',
  'bg-yellow-500 text-yellow-300'
]

const getRandomCourseStyle = () => courseStyles[Math.floor(Math.random() * courseStyles.length)]
</script>

<style scoped>
.course-item {
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
</style>