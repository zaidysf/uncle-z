<template>
  <div class="text-gray-300">
    <h2 class="text-xl text-blue-400 h-6 leading-6 mb-8">/** EXPERIENCE */</h2>
    
    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-0 top-0 bottom-0 w-px bg-blue-500"></div>
      
      <div v-for="(job, index) in experience" :key="index" 
           class="relative pl-8 mb-12 group hover:scale-[1.02] transition-transform">
        <!-- Timeline dot -->
        <div class="absolute left-[-5px] top-2 w-[10px] h-[10px] bg-blue-400 rounded-full"></div>
        
        <!-- Job card -->
        <div class="bg-[#2d2d2d] p-6 rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition-all">
          <div class="mb-2">
            <h3 class="text-green-400 text-lg font-semibold">{{ job.title }}</h3>
            <div class="text-gray-400">{{ job.company }}</div>
            <div class="text-gray-500 text-sm">{{ job.period }}</div>
          </div>
          
          <ul class="space-y-2 mt-4">
            <li v-for="(achievement, i) in job.achievements" :key="i"
                class="flex items-start">
              <span class="text-blue-400 mr-2">•</span>
              <span>{{ achievement }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const experience = [
  {
    title: 'Tech Lead',
    company: 'Perqara',
    period: 'July 2022 - Present, Jakarta, Indonesia · Hybrid',
    achievements: [
      'Directed three technical squads, driving collaboration and ensuring efficient delivery of high-impact projects.',
      'Delivered the company\'s first successful public-facing products, establishing a product-focused culture.',
      'Strategized and managed the technology division\'s budget, optimizing resource allocation and cutting operational costs by 20%.',
      'Developed core features through hands-on coding, reducing development cycles by 30% and accelerating time-to-market.'
    ]
  },
  {
    title: 'Principal Software Development Engineer',
    company: 'Denning IT Sdn Bhd',
    period: 'January 2021 - July 2022, Malaysia · Remote',
    achievements: [
      'Designed and maintained a mission-critical product regulating internal work systems for a prestigious law firm.',
      'Spearheaded the end-to-end architecture and development of the project as the sole developer.',
      'Engineered a high-efficiency software module, increasing data processing speed by 50%.',
      'Enhanced system performance by optimizing workflows, reducing response times by 30%.'
    ]
  },
  {
    title: 'Software Development Manager',
    company: 'PT Generasi Multi Indonusa',
    period: 'March 2020 - September 2020, Surabaya, East Java, Indonesia',
    achievements: [
      'Oversaw all aspects of technology within the company, managing a team of engineers.',
      'Recruited, mentored, and managed a high-performing engineering team, increasing team productivity by 40%.',
      'Developed and implemented strategic budget plans, optimizing technology investments.',
      'Designed and deployed comprehensive infrastructure solutions, ensuring system scalability.'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Tokopedia - Gamification Squad',
    period: 'January 2019 - March 2020, Greater Jakarta Area, Indonesia',
    achievements: [
      'Designed and integrated gamification features into the product, increasing user retention by more than 20%.',
      'Developed backend systems to support gamification elements for both frontend and mobile applications.',
      'Modified and upgraded gamification modules, improving performance and scalability by more than 25%.'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Sleekr',
    period: 'August 2018 - January 2019, Greater Jakarta Area, Indonesia',
    achievements: [
      'Designed and developed a cloud-based accounting system used by 100+ businesses.',
      'Automated financial processes, reducing manual effort by 70%.',
      'Integrated tax compliance features, enabling 100% adherence to regulations.'
    ]
  }
]
</script>

<style scoped>
.group:hover .border-l-4 {
  border-left-width: 8px;
}
</style>