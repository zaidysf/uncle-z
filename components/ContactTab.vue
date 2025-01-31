<template>
  <div class="text-gray-300">
    <h2 class="text-xl text-blue-400 mb-8">/** CONTACT */</h2>

    <!-- Contact Info -->
    <div class="grid grid-cols-2 gap-6 mb-12">
      <div class="bg-[#252526] p-6 rounded-lg">
        <h3 class="text-lg text-blue-400 mb-4">Contact Information</h3>
        <div class="space-y-4">
          <div class="flex items-center group cursor-pointer" @click="$emit('copy', 'email')">
            <span class="w-8 h-8 flex items-center justify-center text-lg mr-3">📧</span>
            <div>
              <div class="group-hover:text-blue-400 transition-colors">zaid.ug@gmail.com</div>
              <div class="text-sm text-gray-500">Email</div>
            </div>
          </div>
          <div class="flex items-center group cursor-pointer" @click="$emit('copy', 'phone')">
            <span class="w-8 h-8 flex items-center justify-center text-lg mr-3">📱</span>
            <div>
              <div class="group-hover:text-blue-400 transition-colors">+628112777854</div>
              <div class="text-sm text-gray-500">Phone</div>
            </div>
          </div>
          <div class="flex items-center group cursor-pointer" @click="$emit('copy', 'location')">
            <span class="w-8 h-8 flex items-center justify-center text-lg mr-3">📍</span>
            <div>
              <div class="group-hover:text-blue-400 transition-colors">Indonesia</div>
              <div class="text-sm text-gray-500">Location</div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-[#252526] p-6 rounded-lg">
        <h3 class="text-lg text-blue-400 mb-4">Social Links</h3>
        <div class="space-y-4">
          <div class="flex items-center group cursor-pointer" @click="$emit('copy', 'linkedin')">
            <span class="w-8 h-8 flex items-center justify-center text-lg mr-3">💼</span>
            <div>
              <div class="group-hover:text-blue-400 transition-colors">linkedin.com/in/zaidysf</div>
              <div class="text-sm text-gray-500">LinkedIn</div>
            </div>
          </div>
          <div class="flex items-center group cursor-pointer" @click="$emit('copy', 'github')">
            <span class="w-8 h-8 flex items-center justify-center text-lg mr-3">💻</span>
            <div>
              <div class="group-hover:text-blue-400 transition-colors">github.com/zaidysf</div>
              <div class="text-sm text-gray-500">GitHub</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="bg-[#252526] p-6 rounded-lg">
      <h3 class="text-lg text-blue-400 mb-4">Send Message</h3>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm text-gray-400 mb-1">Name</label>
            <input 
              type="text" 
              v-model="form.name"
              required
              class="w-full bg-[#1e1e1e] border border-gray-700 rounded px-3 py-2 text-gray-300 focus:outline-none focus:border-blue-500"
              :disabled="loading"
            >
          </div>
          <div>
            <label class="block text-sm text-gray-400 mb-1">Email</label>
            <input 
              type="email" 
              v-model="form.email"
              required
              class="w-full bg-[#1e1e1e] border border-gray-700 rounded px-3 py-2 text-gray-300 focus:outline-none focus:border-blue-500"
              :disabled="loading"
            >
          </div>
        </div>
        <div>
          <label class="block text-sm text-gray-400 mb-1">Message</label>
          <textarea 
            v-model="form.message"
            required
            rows="4"
            class="w-full bg-[#1e1e1e] border border-gray-700 rounded px-3 py-2 text-gray-300 focus:outline-none focus:border-blue-500 resize-none"
            :disabled="loading"
          ></textarea>
        </div>
        <div class="flex items-center justify-between">
          <div class="text-sm text-red-400" v-if="error">{{ error }}</div>
          <button 
            type="submit"
            class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="loading"
          >
            <span v-if="loading" class="flex items-center">
              <span class="animate-spin h-4 w-4 border-2 border-white rounded-full border-t-transparent mr-2"></span>
              Sending...
            </span>
            <span v-else>Send Message</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})
const loading = ref(false)
const error = ref('')

const handleSubmit = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        to: 'zaid.ug@gmail.com'
      })
    })
    
    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.message || 'Failed to send message')
    }
    
    // Clear form on success
    form.value = {
      name: '',
      email: '',
      message: ''
    }
    
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>
