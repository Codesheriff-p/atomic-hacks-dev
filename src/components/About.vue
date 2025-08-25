<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- Background -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-emerald-50/40"
      ></div>
      <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>

      <div class="relative max-w-4xl mx-auto px-6 text-center">
        <!-- Badge -->
        <div
          class="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200 mb-12"
        >
          <div class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
          Sustainable Investment Platform
        </div>

        <!-- Main Heading -->
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight"
        >
          Zero Waste<br />
          <span
            class="font-semibold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent"
          >
            Mutual Fund
          </span>
        </h1>

        <!-- Interest Rate -->
        <div
          class="inline-block bg-white border border-gray-200 rounded-2xl px-8 py-4 mb-12 shadow-sm"
        >
          <h2 class="text-xl md:text-2xl font-medium text-gray-900">
            Earn Up to
            <span class="text-emerald-600 font-semibold">20%</span> Interest Per
            Annum
          </h2>
        </div>

        <!-- Description -->
        <p
          class="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Invest your waste, earn and secure your health.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="navigateToRegistration"
            class="bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-emerald-700 transition-all duration-300 hover-lift"
          >
            Start Investing Today
          </button>
          <button
            @click="scrollToAbout"
            class="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 hover-lift"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
    <!-- Mission & Vision Section -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-20">
          <h2 class="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Our Purpose
          </h2>
          <p class="text-lg text-gray-600 font-light">
            To advance sustainable waste management by promoting impact
            investment and fostering a circular economy
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <div
            class="bg-white rounded-3xl p-12 hover-lift border border-gray-100"
          >
            <div class="flex items-center mb-8">
              <div
                class="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mr-4"
              >
                <svg
                  class="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-medium text-gray-900">Vision</h3>
            </div>
            <p class="text-gray-600 leading-relaxed font-light">
              A future where communities achieve shared prosperity,
              environmental resilience, and social equity through investment in
              zero-waste enterprises.
            </p>
          </div>

          <div
            class="bg-white rounded-3xl p-12 hover-lift border border-gray-100"
          >
            <div class="flex items-center mb-8">
              <div
                class="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mr-4"
              >
                <svg
                  class="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-medium text-gray-900">Mission</h3>
            </div>
            <p class="text-gray-600 leading-relaxed font-light">
              To democratize sustainable investment by enabling collective
              ownership of green enterprises that convert waste into economic
              value, while empowering communities to drive environmental and
              social change.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            About ZWMF
          </h2>
          <div class="w-16 h-0.5 bg-emerald-500 mx-auto"></div>
        </div>

        <div
          class="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-8"
        >
          <p class="text-xl">
            The Zero Waste Mutual Fund (ZWMF) is a people-centered impact
            investment platform designed to finance sustainable waste
            management, circular economy solutions, and environmental education.
          </p>

          <p>
            By pooling resources from individuals, students, businesses,
            institutions, and socially responsible investors, we fund scalable
            projects that turn waste into wealth, while protecting our planet.
          </p>

          <p>
            When you invest through the Zero Waste Mutual Fund, you're not just
            making a financial contribution—you're driving real world change.
            Your investment supports recycling enterprises, eco-innovation,
            youth-led initiatives, and community-based programs that reduce
            pollution, create jobs, and promote sustainability.
          </p>

          <p>
            Whether you're a student, a corporate body, or an eco-conscious
            citizen, you have a role to play. Join us in building a cleaner,
            greener, and more resilient future through purposeful,
            planet-positive investment.
          </p>

          <div
            class="bg-emerald-50 border-l-4 border-emerald-500 p-8 rounded-r-2xl mt-12"
          >
            <p class="text-lg font-medium text-emerald-900 mb-0">
              Become an Impact Investor Today. Let's build a zero waste future
              together.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- UN SDGs Section -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Supporting UN Sustainable Development Goals
          </h2>
          <div class="w-16 h-0.5 bg-emerald-500 mx-auto"></div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div
            class="bg-white border border-gray-200 rounded-2xl p-6 text-center hover-lift"
          >
            <div class="text-2xl font-medium text-gray-900 mb-2">1</div>
            <div class="text-sm text-gray-600 font-light">No Poverty</div>
          </div>
          <div
            class="bg-white border border-gray-200 rounded-2xl p-6 text-center hover-lift"
          >
            <div class="text-2xl font-medium text-gray-900 mb-2">3</div>
            <div class="text-sm text-gray-600 font-light">Good Health</div>
          </div>
          <div
            class="bg-white border border-gray-200 rounded-2xl p-6 text-center hover-lift"
          >
            <div class="text-2xl font-medium text-gray-900 mb-2">6</div>
            <div class="text-sm text-gray-600 font-light">Clean Water</div>
          </div>
          <div
            class="bg-white border border-gray-200 rounded-2xl p-6 text-center hover-lift"
          >
            <div class="text-2xl font-medium text-gray-900 mb-2">12</div>
            <div class="text-sm text-gray-600 font-light">
              Responsible Consumption
            </div>
          </div>
          <div
            class="bg-white border border-gray-200 rounded-2xl p-6 text-center hover-lift"
          >
            <div class="text-2xl font-medium text-gray-900 mb-2">13</div>
            <div class="text-sm text-gray-600 font-light">Climate Action</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer CTA -->
    <section class="py-16 bg-emerald-600">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-light text-white mb-6">
          Ready to Make an Impact?
        </h2>
        <p class="text-xl text-emerald-100 mb-8 font-light">
          Start your sustainable investment journey today
        </p>
        <button
          @click="navigateToRegistration"
          class="bg-white text-emerald-600 px-8 py-4 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 hover-lift"
        >
          Get Started Now
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MinimalZWMFLanding",
  methods: {
    navigateToRegistration() {
      this.$router.push("/register");
    },

    scrollToAbout() {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
  },
};
</script>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 32px 32px;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.prose {
  max-width: none;
}

.prose p {
  margin-bottom: 1.5rem;
}

.prose p:last-child {
  margin-bottom: 0;
}
</style>
