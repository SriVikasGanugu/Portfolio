<template>
  <div id="app" class="min-h-screen bg-dark-900 transition-colors duration-300">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-dark-800/80 backdrop-blur-md z-50 border-b border-dark-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <a href="#home" class="text-2xl font-bold gradient-text">
            The Ganugu
          </a>
          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-8">
            <a href="#about" class="text-gray-300 hover:text-primary-400 transition-colors duration-200">About</a>
            <a href="#projects" class="text-gray-300 hover:text-primary-400 transition-colors duration-200">Projects</a>
            <a href="#skills" class="text-gray-300 hover:text-primary-400 transition-colors duration-200">Skills</a>
            <a href="#contact" class="text-gray-300 hover:text-primary-400 transition-colors duration-200">Contact</a>
          </div>
          <!-- Mobile Menu Button -->
          <div class="flex items-center space-x-4">
            <button @click="toggleMobileMenu" class="md:hidden p-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors duration-200">
              <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-gray-300"></i>
            </button>
          </div>
        </div>
        <!-- Mobile Navigation -->
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-dark-700">
          <div class="flex flex-col space-y-4">
            <a href="#about" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-primary-400 transition-colors duration-200">About</a>
            <a href="#projects" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-primary-400 transition-colors duration-200">Projects</a>
            <a href="#skills" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-primary-400 transition-colors duration-200">Skills</a>
            <a href="#contact" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-primary-400 transition-colors duration-200">Contact</a>
          </div>
        </div>
      </div>
    </nav>
    <!-- Main Content -->
    <main class="pt-16">
      <Home />
    </main>
    <!-- Footer -->
    <footer class="bg-dark-800 border-t border-dark-700 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-gray-400 mb-4 md:mb-0">
            © 2024 Sri Vikas Ganugu. All rights reserved.
          </div>
          <div class="flex space-x-6">
            <a href="https://github.com" target="_blank" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">
              <i class="fab fa-github text-xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">
              <i class="fab fa-linkedin text-xl"></i>
            </a>
            <a href="mailto:srivikasganugu@gmail.com" class="text-gray-400 hover:text-primary-400 transition-colors duration-200">
              <i class="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: { Home },
  setup() {
    const mobileMenuOpen = ref(false)
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }
    return {
      mobileMenuOpen,
      toggleMobileMenu
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style> 