<template>
  <header
    class="bg-white backdrop-blur-md shadow-sm fixed top-0 w-full z-50 border-b border-gray-100"
  >
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
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

          <!-- Register Dropdown (Desktop) -->
          <div class="relative" ref="dropdownDesktop">
            <button
              @click.stop="toggleDropdown"
              class="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium flex items-center"
              :aria-expanded="isDropdownOpen.toString()"
              aria-controls="register-menu-desktop"
              aria-haspopup="true"
            >
              Register
              <svg
                class="ml-1 w-4 h-4 transition-transform duration-300"
                :class="isDropdownOpen ? 'rotate-180' : ''"
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
              id="register-menu-desktop"
              class="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
              @click.stop
            >
              <router-link
                to="/register-impact"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold"
                @click.stop="onDropdownItemClick('/register-impact')"
              >
                Impact Investors
              </router-link>
              <router-link
                to="/register-recycler"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold"
                @click.stop="onDropdownItemClick('/register-recycler')"
              >
                Recycler / Aggregator
              </router-link>
              <router-link
                to="/register-csr-epr"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold"
                @click.stop="onDropdownItemClick('/register-csr-epr')"
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
            aria-label="Toggle navigation"
            :aria-expanded="menuOpen.toString()"
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
      <nav
        class="flex flex-col px-6 py-4 space-y-4 bg-white border-t border-gray-200 shadow-md"
      >
        <a
          href="/#about"
          class="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
          @click="closeMenu"
        >
          About
        </a>
        <a
          href="/#services"
          class="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
          @click="closeMenu"
        >
          Services
        </a>
        <a
          href="/#investment"
          class="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
          @click="closeMenu"
        >
          Investment
        </a>
        <a
          href="/#contact"
          class="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
          @click="closeMenu"
        >
          Contact
        </a>

        <!-- Register Dropdown (Mobile) -->
        <div class="flex flex-col" ref="dropdownMobile">
          <button
            @click.stop="toggleDropdown"
            class="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium flex items-center justify-between"
            :aria-expanded="isDropdownOpen.toString()"
            aria-controls="register-menu-mobile"
            aria-haspopup="true"
          >
            Register
            <svg
              class="ml-2 w-4 h-4 transition-transform duration-300"
              :class="isDropdownOpen ? 'rotate-180' : ''"
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

          <div
            v-if="isDropdownOpen"
            id="register-menu-mobile"
            class="mt-2 pl-4 space-y-2"
            @click.stop
          >
            <router-link
              to="/register-impact"
              class="block text-gray-700 hover:text-emerald-600 font-semibold"
              @click.stop="onDropdownItemClick('/register-impact')"
            >
              Impact Investors
            </router-link>
            <router-link
              to="/register-recycler"
              class="block text-gray-700 hover:text-emerald-600 font-semibold"
              @click.stop="onDropdownItemClick('/register-recycler')"
            >
              Recycler / Aggregator
            </router-link>
            <router-link
              to="/register-csr-epr"
              class="block text-gray-700 hover:text-emerald-600 font-semibold"
              @click.stop="onDropdownItemClick('/register-csr-epr')"
            >
              CSR & EPR
            </router-link>
          </div>
        </div>

        <!-- CTA Button for Mobile -->
        <button
          @click="navigateToRegistration"
          class="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Invest Now
        </button>
      </nav>
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

// Separate refs for desktop & mobile dropdown containers
const dropdownDesktop = ref(null);
const dropdownMobile = ref(null);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
const closeDropdown = () => {
  isDropdownOpen.value = false;
};

// Handle selecting any dropdown item
const onDropdownItemClick = (to) => {
  closeDropdown();
  closeMenu();
  router.push(to);
};

// Close dropdown when clicking outside BOTH containers
const handleClickOutside = (event) => {
  const clickedInsideDesktop =
    dropdownDesktop.value && dropdownDesktop.value.contains(event.target);
  const clickedInsideMobile =
    dropdownMobile.value && dropdownMobile.value.contains(event.target);

  if (!clickedInsideDesktop && !clickedInsideMobile) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDropdown();
  });
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
