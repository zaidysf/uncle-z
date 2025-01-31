export default defineNuxtRouteMiddleware((to) => {
  const validTabs = ['profile', 'experience', 'skills', 'education', 'github', 'contact', 'about']
  
  // If it's the root path, redirect to profile
  if (to.path === '/') {
    return navigateTo('/profile')
  }

  // If it's a tab route but not valid, redirect to profile
  if (to.params.tab && !validTabs.includes(to.params.tab as string)) {
    return navigateTo('/profile')
  }
})
