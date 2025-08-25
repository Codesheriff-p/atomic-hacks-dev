<script setup>
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'

const route = useRoute()
</script>

<template>
  <div class="min-h-screen bg-gray-200">
    <Navbar />
    
    <!-- Router view handles all page routing -->
    <router-view />
  </div>
</template>