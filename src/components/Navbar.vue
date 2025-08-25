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

          <!-- Register Dropdown -->
          <div class="relative" ref="dropdown">
            <button
              @click="toggleDropdown"
              class="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium flex items-center"
            >
              Register
              <svg
                class="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div
              v-if="isDropdownOpen"
              class="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
            >
              <router-link
                to="/register-impact"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold"
                @click="closeDropdown"
              >
                Impact Investors
              </router-link>
              <router-link
                to="/register-recycler"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold"
                @click="closeDropdown"
              >
                Recycler / Aggregator
              </router-link>
              <router-link
                to="/register-csr-epr"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold"
                @click="closeDropdown"
              >
                CSR & EPR
              </router-link>
            </div>
          </div>
        </nav>

        <!-- CTA Button & Mobile Toggle -->
        <div class="flex items-center space-x-4">
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

    <!-- Mobile Navigation (unchanged) -->
    <div
      class="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
      :class="menuOpen ? 'max-h-96' : 'max-h-0'"
    >
      <!-- ... existing mobile nav ... -->
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Menu state
const menuOpen = ref(false);
const toggleMenu = () => (menuOpen.value = !menuOpen.value);
const closeMenu = () => (menuOpen.value = false);

// Navigation method
const navigateToRegistration = () => {
  closeMenu();
  router.push("/register");
};

// Dropdown state
const isDropdownOpen = ref(false);
const dropdown = ref(null);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
