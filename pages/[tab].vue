<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

// Validate route parameter
const validTabs = ['profile', 'experience', 'skills', 'education', 'github', 'contact', 'about']
if (!validTabs.includes(route.params.tab)) {
  router.push('/')
}
</script>
