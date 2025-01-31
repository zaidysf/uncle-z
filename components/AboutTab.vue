<template>
  <div class="text-gray-300">
    <h2 class="text-xl text-blue-400 mb-8">/** ABOUT THIS SITE */</h2>

    <div class="space-y-6">
      <!-- Tech Stack -->
      <div class="bg-[#2d2d2d] p-6 rounded-lg">
        <h3 class="text-lg text-blue-400 mb-4">Tech Stack</h3>
        <div class="grid grid-cols-2 gap-6">
          <div>
            <h4 class="text-sm text-gray-400 mb-2">Core</h4>
            <div class="space-y-2">
              <div class="flex items-center">
                <img src="/logos/nodedotjs.svg" alt="Node.js" class="w-5 h-5 mr-3 filter invert">
                <span>Node.js v20</span>
              </div>
              <div class="flex items-center">
                <img src="/logos/vuedotjs.svg" alt="Vue.js" class="w-5 h-5 mr-3 filter invert">
                <span>Vue.js 3</span>
              </div>
              <div class="flex items-center">
                <img src="/logos/typescript.svg" alt="TypeScript" class="w-5 h-5 mr-3 filter invert">
                <span>TypeScript</span>
              </div>
            </div>
          </div>
          <div>
            <h4 class="text-sm text-gray-400 mb-2">Framework & Tools</h4>
            <div class="space-y-2">
              <div class="flex items-center">
                <span class="w-5 h-5 mr-3 flex items-center justify-center">🚀</span>
                <span>Nuxt 3</span>
              </div>
              <div class="flex items-center">
                <span class="w-5 h-5 mr-3 flex items-center justify-center">🎨</span>
                <span>TailwindCSS</span>
              </div>
              <div class="flex items-center">
                <span class="w-5 h-5 mr-3 flex items-center justify-center">📧</span>
                <span>Mailgun</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Features -->
      <div class="bg-[#2d2d2d] p-6 rounded-lg">
        <h3 class="text-lg text-blue-400 mb-4">Features</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-2">
            <div class="flex items-center">
              <span class="w-5 h-5 mr-3 flex items-center justify-center">💻</span>
              <span>VS Code inspired interface</span>
            </div>
            <div class="flex items-center">
              <span class="w-5 h-5 mr-3 flex items-center justify-center">🌙</span>
              <span>Dark theme</span>
            </div>
            <div class="flex items-center">
              <span class="w-5 h-5 mr-3 flex items-center justify-center">📱</span>
              <span>Responsive design</span>
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex items-center">
              <span class="w-5 h-5 mr-3 flex items-center justify-center">🔄</span>
              <span>Real-time GitHub integration</span>
            </div>
            <div class="flex items-center">
              <span class="w-5 h-5 mr-3 flex items-center justify-center">📨</span>
              <span>Contact form with email</span>
            </div>
            <div class="flex items-center">
              <span class="w-5 h-5 mr-3 flex items-center justify-center">📄</span>
              <span>PDF resume export</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Repository Info -->
      <div class="bg-[#2d2d2d] p-6 rounded-lg">
        <h3 class="text-lg text-blue-400 mb-4">Repository</h3>
        <div class="space-y-2">
          <div class="flex items-center">
            <span class="w-5 h-5 mr-3 flex items-center justify-center">👤</span>
            <span>Author: Zaid Yasyaf</span>
          </div>
          <div class="flex items-center">
            <span class="w-5 h-5 mr-3 flex items-center justify-center">📝</span>
            <span>License: MIT</span>
          </div>
          <div class="flex items-center">
            <span class="w-5 h-5 mr-3 flex items-center justify-center">🏷️</span>
            <span>Version: 1.0.0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
