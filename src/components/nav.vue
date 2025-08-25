<template>
  <header
    class="bg-white backdrop-blur-md shadow-sm fixed top-0 w-full z-50 border-b border-gray-100"
  >
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo and Title -->
        <a class="flex items-center" href="/">
          <div class="relative">
            <img src="/logo.png" alt="logo" class="w-28 h-12" />
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <a
            href="/#about"
            class="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium relative group"
          >
            About
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            href="/#services"
            class="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium relative group"
          >
            Services
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            href="/#investment"
            class="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium relative group"
          >
            Investment
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            href="/#contact"
            class="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium relative group"
          >
            Contact
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        </nav>

        <!-- CTA Button & Mobile Toggle -->
        <div class="flex items-center space-x-4">
          <!-- Invest Now Button with Router Navigation -->
          <button
            @click="navigateToRegistration"
            class="hidden md:block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Invest Now
          </button>

          <!-- Mobile Toggle -->
          <button
            @click="toggleMenu"
            class="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-300"
          >
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span
                class="block w-5 h-0.5 bg-current transition-all duration-300"
                :class="menuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'"
              ></span>
              <span
                class="block w-5 h-0.5 bg-current transition-all duration-300"
                :class="menuOpen ? 'opacity-0' : 'opacity-100'"
              ></span>
              <span
                class="block w-5 h-0.5 bg-current transition-all duration-300"
                :class="
                  menuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                "
              ></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div
      class="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
      :class="menuOpen ? 'max-h-96' : 'max-h-0'"
    >
      <div class="bg-white border-t border-gray-100">
        <nav class="container mx-auto px-6 py-4">
          <div class="flex flex-col space-y-4">
            <a
              href="/#about"
              class="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium py-2 flex items-center"
              @click="closeMenu"
            >
              <svg
                class="w-4 h-4 mr-3 text-emerald-500"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                />
              </svg>
              About
            </a>
            <a
              href="/#services"
              class="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium py-2 flex items-center"
              @click="closeMenu"
            >
              <svg
                class="w-4 h-4 mr-3 text-emerald-500"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              Services
            </a>
            <a
              href="/#investment"
              class="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium py-2 flex items-center"
              @click="closeMenu"
            >
              <svg
                class="w-4 h-4 mr-3 text-emerald-500"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                />
              </svg>
              Investment
            </a>
            <a
              href="/#contact"
              class="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium py-2 flex items-center"
              @click="closeMenu"
            >
              <svg
                class="w-4 h-4 mr-3 text-emerald-500"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Contact
            </a>
            <div class="pt-4 border-t border-gray-100">
              <!-- Mobile CTA Button with Router Navigation -->
              <button
                @click="navigateToRegistration"
                class="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Menu state
const menuOpen = ref(false);

// Menu methods
const toggleMenu = () => (menuOpen.value = !menuOpen.value);
const closeMenu = () => (menuOpen.value = false);

// Navigation method
const navigateToRegistration = () => {
  // Close mobile menu if open
  closeMenu();

  // Navigate to registration page
  router.push("/register");
};
</script>

<style scoped>
/* Smooth backdrop blur */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
}

/* Animated hamburger menu */
.hamburger-line {
  transition: all 0.3s ease;
}

/* Pulse animation for logo indicator */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
