<template>
  <div class="flex flex-col h-screen bg-[#1e1e1e]">
    <!-- Menu Bar -->
    <div class="bg-[#252526] text-gray-300 px-4 py-2 sticky top-0 z-50">
      <div class="flex justify-between items-center">
        <div class="flex space-x-4">
          <!-- File Menu -->
          <div class="relative">
            <span 
              @click="showFileMenu = !showFileMenu; showEditMenu = false; showViewMenu = false"
              class="cursor-pointer hover:text-white"
            >File</span>
            
            <div v-if="showFileMenu" 
                class="absolute left-0 mt-2 bg-[#2d2d2d] border border-gray-700 rounded-md py-1 w-56 z-50">
              <div v-for="item in fileMenu" :key="item.label" 
                  class="px-4 py-2 hover:bg-[#3d3d3d] cursor-pointer"
                  @click="handleFileMenu(item.action)">
                {{ item.label }}
              </div>
            </div>
          </div>

          <!-- Edit Menu -->
          <div class="relative">
            <span 
              @click="showEditMenu = !showEditMenu; showFileMenu = false; showViewMenu = false"
              class="cursor-pointer hover:text-white"
            >Edit</span>
            
            <div v-if="showEditMenu" 
                class="absolute left-0 mt-2 bg-[#2d2d2d] border border-gray-700 rounded-md py-1 w-56 z-50">
              <div v-for="item in editMenu" :key="item.label" 
                  class="px-4 py-2 hover:bg-[#3d3d3d] cursor-pointer"
                  @click="handleEditMenu(item.action)">
                {{ item.label }}
              </div>
            </div>
          </div>

          <!-- View Menu -->
          <div class="relative">
            <span 
              @click="showViewMenu = !showViewMenu; showFileMenu = false; showEditMenu = false"
              class="cursor-pointer hover:text-white"
            >View</span>
            
            <div v-if="showViewMenu" 
                class="absolute left-0 mt-2 bg-[#2d2d2d] border border-gray-700 rounded-md py-1 w-48 z-50">
              <div v-for="tab in tabs" :key="tab.name" 
                  class="px-4 py-2 hover:bg-[#3d3d3d] cursor-pointer flex items-center">
                <input 
                  type="checkbox" 
                  :id="tab.name"
                  v-model="tab.visible"
                  class="mr-2"
                >
                <label :for="tab.name" class="cursor-pointer flex-1">{{ tab.name }}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="text-white font-medium">Zaid Yasyaf</div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="flex bg-[#2d2d2d] text-gray-400 overflow-x-auto sticky top-10 z-40">
      <div 
        v-for="tab in visibleTabs" 
        :key="tab.name"
        :class="[
          'px-4 py-2 border-r border-gray-700 cursor-pointer whitespace-nowrap',
          activeTab === tab.name ? 'bg-[#1e1e1e] text-white' : ''
        ]"
        @click="$router.push(`/${tab.name}`)"
      >
        {{ tab.name }}
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-1 overflow-hidden relative">
      <!-- Content Area with Line Numbers -->
      <div class="flex-1 overflow-y-auto relative" ref="contentArea" @scroll="handleScroll">
        <!-- Line Numbers -->
        <div class="bg-[#252526] text-gray-600 py-4 px-2 text-right select-none w-16 fixed z-10">
          <div v-for="n in lineCount" :key="n" class="h-6 leading-6" :style="{ transform: `translateY(${-scrollTop}px)` }">{{ n }}</div>
        </div>
        <!-- Content with left padding for line numbers -->
        <div class="pl-16">
          <div class="p-4" ref="contentWrapper">
            <component 
              :is="currentComponent" 
              v-if="currentComponent"
              @copy="handleContactCopy" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Toast Notification -->
  <Toast :message="toastMessage" :is-visible="showToast" />

  <!-- Hidden Download Link -->
  <a ref="downloadLink" class="hidden" download="zaid-yasyaf-resume.pdf"></a>

  <!-- Click outside handler for dropdowns -->
  <div v-if="showFileMenu || showEditMenu || showViewMenu" 
       class="fixed inset-0 z-40"
       @click="closeAllMenus"></div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick, markRaw } from 'vue'
import ProfileTabRaw from '../components/ProfileTab.vue'
import ExperienceTabRaw from '../components/ExperienceTab.vue'
import SkillsTabRaw from '../components/SkillsTab.vue'
import EducationTabRaw from '../components/EducationTab.vue'
import GithubTabRaw from '../components/GithubTab.vue'
import ContactTabRaw from '../components/ContactTab.vue'
import AboutTabRaw from '../components/AboutTab.vue'
import ToastRaw from '../components/Toast.vue'

// Mark components as raw to prevent reactivity
const ProfileTab = markRaw(ProfileTabRaw)
const ExperienceTab = markRaw(ExperienceTabRaw)
const SkillsTab = markRaw(SkillsTabRaw)
const EducationTab = markRaw(EducationTabRaw)
const GithubTab = markRaw(GithubTabRaw)
const ContactTab = markRaw(ContactTabRaw)
const AboutTab = markRaw(AboutTabRaw)
const Toast = markRaw(ToastRaw)

const showFileMenu = ref(false)
const showEditMenu = ref(false)
const showViewMenu = ref(false)
const showToast = ref(false)
const toastMessage = ref('')
const downloadLink = ref(null)
const contentArea = ref(null)
const contentWrapper = ref(null)
const scrollTop = ref(0)
const lineCount = ref(0)

const tabs = ref([
  { name: 'profile', visible: true, component: ProfileTab },
  { name: 'experience', visible: true, component: ExperienceTab },
  { name: 'skills', visible: true, component: SkillsTab },
  { name: 'education', visible: true, component: EducationTab },
  { name: 'github', visible: true, component: GithubTab },
  { name: 'contact', visible: true, component: ContactTab },
  { name: 'about', visible: true, component: AboutTab }
])

const visibleTabs = computed(() => tabs.value.filter(tab => tab.visible))
const route = useRoute()
const router = useRouter()
const activeTab = computed(() => route.params.tab || 'profile')

const currentComponent = computed(() => {
  const tab = tabs.value.find(t => t.name === activeTab.value && t.visible)
  return tab?.component
})

// Initial navigation
onMounted(() => {
  if (!route.params.tab) {
    router.push('/profile')
  }
})

const fileMenu = [
  { label: 'Export as PDF', action: 'exportPDF' },
  { label: 'Share Portfolio', action: 'sharePortfolio' },
  { label: 'Exit', action: 'exit' }
]

const editMenu = [
  { label: 'Copy Contact Info', action: 'copyContact' },
  { label: 'Copy GitHub Link', action: 'copyGithub' },
  { label: 'Copy LinkedIn URL', action: 'copyLinkedIn' }
]

const handleScroll = () => {
  if (contentArea.value) {
    scrollTop.value = contentArea.value.scrollTop
  }
}

const updateLineCount = () => {
  if (contentWrapper.value) {
    const contentHeight = contentWrapper.value.offsetHeight
    lineCount.value = Math.ceil(contentHeight / 24) // 24px is the line height
  }
}

let resizeObserver = null

onMounted(() => {
  if (contentWrapper.value) {
    resizeObserver = new ResizeObserver(() => {
      nextTick(() => {
        updateLineCount()
      })
    })
    resizeObserver.observe(contentWrapper.value)
  }
  window.addEventListener('resize', updateLineCount)
  
  // Initial line count update
  nextTick(() => {
    updateLineCount()
  })
})

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
  window.removeEventListener('resize', updateLineCount)
})

watch(() => activeTab.value, () => {
  nextTick(() => {
    updateLineCount()
  })
})

const showToastMessage = (message) => {
  toastMessage.value = message
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const downloadPDF = async () => {
  try {
    const response = await fetch('/resume.pdf')
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const a = downloadLink.value
    a.href = url
    a.click()
    window.URL.revokeObjectURL(url)
  } catch (error) {
    showToastMessage('Failed to download PDF')
  }
}

const copyToClipboard = async (text, successMessage) => {
  try {
    await navigator.clipboard.writeText(text)
    showToastMessage(successMessage)
  } catch (err) {
    showToastMessage('Failed to copy to clipboard')
  }
}

const handleFileMenu = (action) => {
  switch(action) {
    case 'exportPDF':
      downloadPDF()
      break
    case 'sharePortfolio':
      copyToClipboard(window.location.href, 'Portfolio URL copied to clipboard!')
      break
    case 'exit':
      window.close()
      // Fallback if window.close() is blocked
      showToastMessage('Use browser controls to close the window')
      break
  }
  showFileMenu.value = false
}

const handleEditMenu = (action) => {
  switch(action) {
    case 'copyContact':
      copyToClipboard('zaid.ug@gmail.com • +628112777854', 'Contact information copied!')
      break
    case 'copyGithub':
      copyToClipboard('https://github.com/zaidysf', 'GitHub URL copied!')
      break
    case 'copyLinkedIn':
      copyToClipboard('https://linkedin.com/in/zaidysf', 'LinkedIn URL copied!')
      break
  }
  showEditMenu.value = false
}

const handleContactCopy = (type) => {
  switch(type) {
    case 'email':
      copyToClipboard('zaid.ug@gmail.com', 'Email copied to clipboard!')
      break
    case 'phone':
      copyToClipboard('+628112777854', 'Phone number copied to clipboard!')
      break
    case 'location':
      copyToClipboard('Indonesia', 'Location copied to clipboard!')
      break
    case 'linkedin':
      copyToClipboard('https://linkedin.com/in/zaidysf', 'LinkedIn URL copied!')
      break
    case 'github':
      copyToClipboard('https://github.com/zaidysf', 'GitHub URL copied!')
      break
  }
}

const closeAllMenus = () => {
  showFileMenu.value = false
  showEditMenu.value = false
  showViewMenu.value = false
}
</script>

<style>
.h-6 {
  height: 1.5rem;
}
.leading-6 {
  line-height: 1.5rem;
}
</style>
