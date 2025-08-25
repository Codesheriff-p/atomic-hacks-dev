<template>
  <div class="relative">
    <!-- Hero Carousel -->
    <div class="carousel w-full h-screen relative overflow-hidden">
      <!-- Slide 1 -->
      <div 
        id="slide1" 
        class="carousel-item absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style="background-image: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%), url('https://res.cloudinary.com/dqrykh6qy/image/upload/v1751083655/download_7_nuznl8.jpg')"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center text-white max-w-4xl mx-auto px-6">
            <div class="mb-8 inline-block">
              <span class="bg-emerald-500/20 backdrop-blur-sm text-emerald-300 px-4 py-2 rounded-full text-sm font-medium border border-emerald-400/30">
                Sustainable Investment
              </span>
            </div>
            <h1 class="text-5xl md:text-7xl font-light mb-6 leading-tight">
              Zero Waste
              <span class="block font-bold text-emerald-400">Mutual Fund</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-200 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
              Whether you are an individual looking to align your investments with your values, a corporate body seeking sustainable CSR engagement, or an institution aiming to meet ESG goals
            </p>
            <p class="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Turn waste into wealth while building a greener, healthier future for all
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Investing
              </button>
              <button class="border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-medium transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        <!-- Navigation arrows -->
        <button 
          @click="goToSlide('slide3')"
          class="absolute left-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button 
          @click="goToSlide('slide2')"
          class="absolute right-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      <!-- Slide 2 -->
      <div 
        id="slide2" 
        class="carousel-item absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style="background-image: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%), url('https://res.cloudinary.com/dqrykh6qy/image/upload/v1751083652/Will_Lebanon_be_Able_to_End_its_Trash_Crisis__xpfa7z.jpg')"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center text-white max-w-4xl mx-auto px-6">
            <h1 class="text-5xl md:text-7xl font-light mb-6 leading-tight">
              Revolutionizing
              <span class="block font-bold text-emerald-400">Waste Management</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-200 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              Empowering communities through sustainable investment opportunities that create lasting environmental impact
            </p>
          </div>
        </div>
        
        <button 
          @click="goToSlide('slide1')"
          class="absolute left-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button 
          @click="goToSlide('slide3')"
          class="absolute right-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      <!-- Slide 3 -->
      <div 
        id="slide3" 
        class="carousel-item absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style="background-image: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%), url('https://res.cloudinary.com/dqrykh6qy/image/upload/v1751083579/Real_Recycling__oacyd4.jpg')"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center text-white max-w-4xl mx-auto px-6">
            <h1 class="text-5xl md:text-7xl font-light mb-6 leading-tight">
              Eco-Focused
              <span class="block font-bold text-emerald-400">Investments</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-200 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              Invest in green solutions that make a real difference in communities worldwide
            </p>
          </div>
        </div>
        
        <button 
          @click="goToSlide('slide2')"
          class="absolute left-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button 
          @click="goToSlide('slide1')"
          class="absolute right-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Slide indicators -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
      <button 
        @click="goToSlide('slide1')"
        class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/70 transition-colors duration-300"
        :class="{ 'bg-white': currentSlide === 1 }"
      ></button>
      <button 
        @click="goToSlide('slide2')"
        class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/70 transition-colors duration-300"
        :class="{ 'bg-white': currentSlide === 2 }"
      ></button>
      <button 
        @click="goToSlide('slide3')"
        class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/70 transition-colors duration-300"
        :class="{ 'bg-white': currentSlide === 3 }"
      ></button>
    </div>
  </div>

  
</template>

<script>
export default {
  name: 'ZeroWasteHero',
  data() {
    return {
      currentSlide: 1
    }
  },
  methods: {
    goToSlide(slideId) {
      const slideNumber = parseInt(slideId.replace('slide', ''));
      this.currentSlide = slideNumber;
      
      // Hide all slides
      const slides = document.querySelectorAll('.carousel-item');
      slides.forEach(slide => {
        slide.style.opacity = '0';
      });
      
      // Show target slide
      const targetSlide = document.getElementById(slideId);
      if (targetSlide) {
        setTimeout(() => {
          targetSlide.style.opacity = '1';
        }, 50);
      }
    }
  },
  mounted() {
    // Initialize first slide
    this.goToSlide('slide1');
    
    // Auto-advance slides every 6 seconds
    setInterval(() => {
      const nextSlide = this.currentSlide === 3 ? 1 : this.currentSlide + 1;
      this.goToSlide(`slide${nextSlide}`);
    }, 6000);
  }
}
</script>

<style scoped>
.carousel-item {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.carousel-item:first-child {
  opacity: 1;
}

/* Smooth hover effects */
button {
  transition: all 0.3s ease;
}

/* Backdrop blur support */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}
</style>