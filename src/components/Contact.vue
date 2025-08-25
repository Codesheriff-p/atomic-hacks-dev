<template>
  <!-- Contact Section -->
  <section id="contact" class="py-24 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-20">
        <h2 class="text-3xl md:text-4xl font-light text-gray-900 mb-4">Get Involved</h2>
        <p class="text-lg text-gray-600 font-light">Join us in building a sustainable future through cooperative investment</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-12 mb-16">
        <div 
          v-for="contact in contactMethods" 
          :key="contact.id"
          class="text-center"
        >
          <div class="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <component :is="contact.icon" class="w-6 h-6 text-emerald-600" />
          </div>
          <h3 class="text-xl font-medium text-gray-900 mb-3">{{ contact.title }}</h3>
          <p class="text-gray-600 font-light">{{ contact.value }}</p>
        </div>
      </div>
      
      <div class="text-center">
        <button 
          @click="navigateToRegistration"
          class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/20 group"
        >
          <span>Become an Impact Investor Today</span>
          <svg 
            class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-white border-t border-gray-100 py-12">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center mb-8">
        <div class="flex items-center space-x-4 mb-8 md:mb-0">
          <img src="/logo.png" alt="logo" class="h-12 w-28">
          
        </div>
        
        <div class="text-center md:text-right">
          <p class="text-gray-500 text-sm font-light">© 2024 ZWMF Co-operative Society. All rights reserved.</p>
          <p class="text-gray-500 text-sm font-light mt-1">Transforming waste into wealth, building sustainable communities.</p>
        </div>
      </div>
      
      <!-- Integrated Partners -->
      <div class="border-t border-gray-100 pt-8">
        <div class="flex flex-col md:flex-row justify-center items-center gap-8">
        
            <div class="flex items-center space-x-3">
            <a 
              :href="partners.hey.website" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img 
                :src="partners.hey.logo" 
                :alt="partners.hey.name"
                class="h-20 opacity-80"
              />
              <span class="text-sm text-gray-500 font-light">{{ partners.hey.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ContactFooter',
  data() {
    return {
      contactMethods: [
        {
          id: 1,
          title: 'Call Us',
          value: '+234 XXX XXX XXXX',
          icon: 'PhoneIcon'
        },
        {
          id: 2,
          title: 'Email Us',
          value: 'info@zwmf.org',
          icon: 'MailIcon'
        },
        {
          id: 3,
          title: 'Visit Us',
          value: 'Lagos, Nigeria',
          icon: 'MapPinIcon'
        }
      ],
      partners: {
        arm: {
          name: 'ARM Investment Managers',
          logo: '/arm.jpg' 
        },
        hey: {
          name: 'HEY Initiative',
          logo: '/hey.jpg', 
          website: 'https://heyinitiative.ng/'
        }
      }
    }
  },
  methods: {
    navigateToRegistration() {
     this.$router.push('/register');
    }
  },
  components: {
    PhoneIcon: {
      template: `
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      `
    },
    MailIcon: {
      template: `
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      `
    },
    MapPinIcon: {
      template: `
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      `
    }
  }
}
</script>

<style scoped>
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>