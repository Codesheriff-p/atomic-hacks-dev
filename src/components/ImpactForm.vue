<template>
  <div class="bg-gray-100 py-10 flex items-center justify-center mt-20">
    <div class="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
      <h1 class="text-2xl font-bold text-green-700 text-center mb-4">
        BECOME AN IMPACT INVESTOR
      </h1>
      <p class="text-gray-600 text-center mb-6">
        Join the Zero Waste Mutual Fund (ZWMF) and transform waste into wealth
        while supporting environmental sustainability.
      </p>

      <form @submit.prevent="submitForm" class="space-y-6">
        <!-- Personal Information -->
        <h2 class="text-xl font-semibold text-gray-700">
          👤 Personal/Organizational Information
        </h2>

        <div>
          <label class="block text-gray-600 font-medium">Full Name</label>
          <input
            v-model="form.fullName"
            type="text"
            class="w-full p-2 border-gray-700 border rounded-md focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 placeholder-gray-400"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label class="block text-gray-600 font-medium"
            >Organization Name</label
          >
          <input
            v-model="form.organization"
            type="text"
            class="w-full p-2 border rounded-md focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 placeholder-gray-400"
            placeholder="Enter organization name (if applicable)"
          />
        </div>

        <div>
          <label class="block text-gray-600 font-medium"
            >Category of Investor</label
          >
          <div class="grid grid-cols-2 gap-2 mt-2">
            <label class="text-gray-600 font-semibold"
              ><input
                v-model="form.category"
                type="radio"
                value="Household"
                class="mr-2"
              />
              Household</label
            >
            <label class="text-gray-600 font-semibold"
              ><input
                v-model="form.category"
                type="radio"
                value="Individual"
                class="mr-2"
              />
              Individual</label
            >
            <label class="text-gray-600 font-semibold"
              ><input
                v-model="form.category"
                type="radio"
                value="Student"
                class="mr-2"
              />
              Student</label
            >
            <label class="text-gray-600 font-semibold"
              ><input
                v-model="form.category"
                type="radio"
                value="Cooperative Society"
                class="mr-2"
              />
              Cooperative Society</label
            >
            <label class="text-gray-600 font-semibold"
              ><input
                v-model="form.category"
                type="radio"
                value="Market Group"
                class="mr-2"
              />
              Market Group</label
            >
            <label class="text-gray-600 font-semibold"
              ><input
                v-model="form.category"
                type="radio"
                value="School"
                class="mr-2"
              />
              School / Institution</label
            >
            <label class="col-span-2 text-gray-600 font-semibold">
              <input
                v-model="form.category"
                type="radio"
                value="Others"
                class="mr-2"
              />
              Others (please specify)
            </label>
          </div>
        </div>

        <div>
          <label class="block text-gray-600 font-medium">Mobile Number</label>
          <input
            v-model="form.mobile"
            type="tel"
            class="w-full p-2 border rounded-md focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 placeholder-gray-400"
            placeholder="Active phone number"
            required
          />
        </div>

        <div>
          <label class="block text-gray-600 font-medium">Email Address</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full p-2 border rounded-md focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 placeholder-gray-400"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label class="block text-gray-600 font-medium"
            >Residential / Business Address</label
          >
          <textarea
            v-model="form.address"
            class="w-full p-2 border rounded-md focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 placeholder-gray-400"
            rows="2"
            placeholder="Street, city/town, building number"
          ></textarea>
        </div>

        <div>
          <label class="block text-gray-600 font-medium"
            >Nearest Landmark or Bus Stop</label
          >
          <input
            v-model="form.landmark"
            type="text"
            class="w-full p-2 border rounded-md focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 placeholder-gray-400"
            placeholder="Enter nearest landmark"
          />
        </div>

        <div>
          <label
            class="block text-gray-600 font-medium focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 placeholder-gray-400 text-gray-700"
            >Local Government Area (LGA)</label
          >
          <select
            v-model="form.lga"
            class="w-full p-2 border rounded-md focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 placeholder-gray-400 text-gray-500 font-semibold"
          >
            <option value="" class="text-gray-700 font-semibold">
              Select LGA
            </option>
            <option class="text-gray-800">Obio/Akpor</option>
            <option class="text-gray-800">Port Harcourt City</option>
            <option class="text-gray-800">Other...</option>
          </select>
        </div>

        <div>
          <label class="block text-gray-600 font-medium">State</label>
          <input
            v-model="form.state"
            type="text"
            class="w-full p-2 border rounded-md focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 placeholder-gray-400"
            placeholder="Enter your state"
          />
        </div>

        <!-- Investment Details -->
        <h2 class="text-xl font-semibold text-gray-700">
          💼 Impact Investment Details
        </h2>

        <div>
          <label class="block text-gray-600 font-medium"
            >Preferred Investment Focus (optional)</label
          >
          <div class="grid grid-cols-2 gap-2 mt-2">
            <label class="text-gray-600 font-semibold"
              ><input
                v-model="form.investmentFocus"
                type="checkbox"
                value="Plastic Waste"
                class="mr-2"
              />
              Plastic Waste</label
            >
            <label class="text-gray-600 font-semibold"
              ><input
                v-model="form.investmentFocus"
                type="checkbox"
                value="Paper & Carton Waste"
                class="mr-2"
              />
              Paper & Carton Waste</label
            >
            <label class="text-gray-600 font-semibold"
              ><input
                v-model="form.investmentFocus"
                type="checkbox"
                value="E-Waste"
                class="mr-2"
              />
              E-Waste</label
            >
            <label class="text-gray-600 font-semibold"
              ><input
                v-model="form.investmentFocus"
                type="checkbox"
                value="Organic Waste"
                class="mr-2"
              />
              Organic Waste</label
            >
            <label class="text-gray-600 font-semibold"
              ><input
                v-model="form.investmentFocus"
                type="checkbox"
                value="General Waste"
                class="mr-2"
              />
              General Waste Diversion</label
            >
            <label class="text-gray-600 font-semibold"
              ><input
                v-model="form.investmentFocus"
                type="checkbox"
                value="Educational Support"
                class="mr-2"
              />
              Educational Support</label
            >
            <label class="text-gray-600 font-semibold"
              ><input
                v-model="form.investmentFocus"
                type="checkbox"
                value="Infrastructure Development"
                class="mr-2"
              />
              Infrastructure Development</label
            >
            <label class="col-span-2 text-gray-600 font-semibold"
              ><input
                v-model="form.investmentFocus"
                type="checkbox"
                value="Others"
                class="mr-2"
              />
              Others (please specify)</label
            >
          </div>
        </div>

        <div>
          <label class="block text-gray-600 font-medium"
            >Upload Passport Photograph</label
          >
          <input
            type="file"
            @change="handleFileUpload"
            class="w-full p-2 border rounded-md text-sm text-gray-600 file:font-semibold file:bg-gray-600 hover:file:bg-gray-700 file:text-white file:py-2 file:px-2 file:rounded"
            accept=".jpg,.png,.pdf"
          />
        </div>

        <!-- Consent -->
        <h2 class="text-xl font-semibold text-gray-700">
          ✅ Consent & Declaration
        </h2>
        <p class="text-sm text-gray-600">
          By submitting this form, I acknowledge that I am willingly
          participating in the Zero Waste Mutual Fund as an Impact Investor. I
          agree to receive updates, training invitations, and project
          opportunities. My data will be handled responsibly.
        </p>
        <label class="flex items-center mt-2 text-gray-700">
          <input
            v-model="form.consent"
            type="checkbox"
            required
            class="mr-2 text-green-700"
          />
          I agree and consent
        </label>

        <!-- Submit -->
        <button
          type="submit"
          class="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg"
        >
          SUBMIT REGISTRATION
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  fullName: "",
  organization: "",
  category: "",
  mobile: "",
  email: "",
  address: "",
  landmark: "",
  lga: "",
  state: "",
  investmentFocus: [],
  file: null,
  consent: false,
});

const handleFileUpload = (event) => {
  form.file = event.target.files[0];
};

const submitForm = () => {
  console.log("Form Submitted:", { ...form });
  alert("Form submitted successfully!");
};
</script>
