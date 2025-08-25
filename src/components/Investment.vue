<template>
  <section class="py-24 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-20">
        <h2 class="text-3xl md:text-4xl font-light text-gray-900 mb-4">
          Investment Community
        </h2>
        <p class="text-lg text-gray-600 font-light">
          Building a sustainable future through collective investment
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12">
        <!-- who can invest  Card -->
        <div class="bg-white rounded-3xl p-12 hover-lift border border-gray-100">
          <div class="flex items-center mb-8">
            <div class="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 class="text-2xl font-medium text-gray-900">who can invest ?</h3>
          </div>
          <p class="text-gray-600 leading-relaxed font-light mb-8">
            Our investment platform welcomes diverse community members committed to sustainable impact and environmental stewardship.
          </p>
          <div class="space-y-4">
            <div 
              v-for="member in eligibleMembers" 
              :key="member.id"
              class="flex items-start"
            >
              <div class="flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
              <span class="text-gray-700 font-light">{{ member.text }}</span>
            </div>
          </div>
        </div>
        
        <!-- What Can You Invest Card -->
        <div class="bg-white rounded-3xl p-12 hover-lift border border-gray-100">
          <div class="flex items-center mb-8">
            <div class="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path d="M16 3.13a4 4 0 0 1 0 7.75M10.5 3a6 6 0 0 0-9 9 6 6 0 0 0 9 9 6 6 0 0 0 9-9 6 6 0 0 0-9-9z"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 class="text-2xl font-medium text-gray-900">What Can You Invest</h3>
          </div>
          <p class="text-gray-600 leading-relaxed font-light mb-8">
            You can invest in the future by turning waste into wealth. Contribute the following materials to support a cleaner environment and a circular economy.
          </p>
          <div class="space-y-4">
            <div 
              v-for="material in investmentMaterials" 
              :key="material.id"
              class="flex items-start"
            >
              <div class="flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
              <span class="text-gray-700 font-light">{{ material.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InvestmentCommunity',
  data() {
    return {
      eligibleMembers: [
        { id: 1, text: 'Individuals and households' },
        { id: 2, text: 'Schools and educational institutions' },
        { id: 3, text: 'Community groups and organizations' },
        { id: 4, text: 'Artisans and craftspeople' },
        { id: 5, text: 'Waste collectors and recyclers' },
        { id: 6, text: 'Microenterprises and small businesses' }
      ],
      investmentMaterials: [
        { id: 1, text: 'PET Bottles' },
        { id: 2, text: 'Rubber' },
        { id: 3, text: 'Aluminum Cans' },
        { id: 4, text: 'Iron' },
        { id: 5, text: 'Paper' },
        { id: 6, text: 'Used Batteries' },
        { id: 7, text: 'E-Waste' },
        { id: 8, text: 'Organic Waste (for animal feed, fertilizer, and biofuel)' }
      ]
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