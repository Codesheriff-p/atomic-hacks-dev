<template>
  <div
    class="min-h-screen bg-gray-100 flex items-center justify-center py-10 mt-20"
  >
    <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
      <h1 class="text-2xl font-bold text-green-600 mb-6">
        Register as a Recycler/Aggregator
      </h1>

      <p class="text-black mb-6">
        Join our mission to build a cleaner, greener, and more sustainable
        Nigeria. Register today to become a recognized Recycler or Aggregator
        within the Zero Waste Mutual Fund network.
      </p>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <!-- Full Name -->
        <div>
          <label class="block text-black font-bold">Full Name</label>
          <input
            v-model="form.fullName"
            type="text"
            placeholder="Enter your first and last name"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-400"
          />
        </div>

        <!-- Business Name -->
        <div>
          <label class="block text-black font-bold">Business Name</label>
          <input
            v-model="form.businessName"
            type="text"
            placeholder="Enter your business name"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-400"
          />
        </div>

        <!-- Mobile -->
        <div>
          <label class="block text-black font-bold">Mobile Number</label>
          <input
            v-model="form.mobile"
            type="text"
            placeholder="Phone number for contact and updates"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-400"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-black font-bold">Email Address</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="Enter a valid email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-400"
          />
        </div>

        <!-- Address -->
        <div>
          <label class="block text-black font-bold">Business Address</label>
          <input
            v-model="form.address"
            type="text"
            placeholder="Street name, building number"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-400"
          />
        </div>

        <!-- Landmark -->
        <div>
          <label class="block text-black font-bold"
            >Nearest Landmark / Bus Stop</label
          >
          <input
            v-model="form.landmark"
            type="text"
            placeholder="Enter nearest landmark"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-400"
          />
        </div>

        <!-- LGA -->
        <div>
          <label class="block text-black font-bold"
            >Local Government Area (LGA)</label
          >
          <select
            v-model="form.lga"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
          >
            <option value="">Select your LGA</option>
            <option>LGA 1</option>
            <option>LGA 2</option>
            <option>LGA 3</option>
          </select>
        </div>

        <!-- State -->
        <div>
          <label class="block text-black font-bold">State</label>
          <input
            v-model="form.state"
            type="text"
            placeholder="Enter your state"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-400"
          />
        </div>

        <!-- Recyclable Materials -->
        <div>
          <label class="block text-black font-bold"
            >Types of Recyclable Materials You Collect</label
          >
          <div class="grid grid-cols-2 gap-2 mt-2 text-gray-700">
            <label
              ><input
                type="checkbox"
                value="PET Bottles"
                v-model="form.materials"
              />
              PET Bottles</label
            >
            <label
              ><input
                type="checkbox"
                value="Rubber Materials"
                v-model="form.materials"
              />
              Rubber Materials</label
            >
            <label
              ><input
                type="checkbox"
                value="Aluminum Cans"
                v-model="form.materials"
              />
              Aluminum Cans</label
            >
            <label
              ><input
                type="checkbox"
                value="Scrap Metals"
                v-model="form.materials"
              />
              Scrap Metals</label
            >
            <label
              ><input
                type="checkbox"
                value="Paper/Cardboard"
                v-model="form.materials"
              />
              Paper & Cardboard</label
            >
            <label
              ><input
                type="checkbox"
                value="Used Batteries"
                v-model="form.materials"
              />
              Used Batteries</label
            >
            <label
              ><input
                type="checkbox"
                value="E-Waste"
                v-model="form.materials"
              />
              E-Waste</label
            >
            <label
              ><input
                type="checkbox"
                value="Organic Waste"
                v-model="form.materials"
              />
              Organic Waste</label
            >
          </div>
        </div>

        <!-- Operation Type -->
        <div>
          <label class="block text-black font-bold">Do You Operate as</label>
          <select
            v-model="form.operationType"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
          >
            <option value="">Select one</option>
            <option>Individual Recycler</option>
            <option>Community Aggregator</option>
            <option>Small Business / Cooperative</option>
            <option>NGO or Environmental Organization</option>
          </select>
        </div>

        <!-- Frequency -->
        <div>
          <label class="block text-black font-bold"
            >How Frequently Do You Collect Recyclables?</label
          >
          <select
            v-model="form.collectionFrequency"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
          >
            <option value="">Select frequency</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Bi-weekly</option>
            <option>Monthly</option>
          </select>
        </div>

        <!-- Volume -->
        <div>
          <label class="block text-black font-bold"
            >Estimated Monthly Volume (kg)</label
          >
          <input
            v-model="form.volume"
            type="text"
            placeholder="Optional"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-400"
          />
        </div>

        <!-- ID Upload -->
        <div>
          <label class="block text-black font-bold"
            >Upload Valid Identification (Optional)</label
          >
          <input
            type="file"
            @change="handleFileUpload"
            class="w-full p-2 border rounded-md text-sm text-gray-600 file:font-semibold file:bg-gray-600 hover:file:bg-gray-700 file:text-white file:py-2 file:px-2 file:rounded"
            accept=".jpg,.png,.pdf"
          />
        </div>

        <!-- Consent -->
        <div class="flex items-start space-x-2">
          <input type="checkbox" v-model="form.consent" class="mt-1" />
          <p class="text-gray-600 text-sm">
            By submitting this form, you agree to be contacted by the Zero Waste
            Mutual Fund for updates, training, and recycling partnership
            opportunities. Your data will be kept confidential and used only for
            the purpose of enhancing waste management efforts in Nigeria.
          </p>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Submit Registration
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  fullName: "",
  businessName: "",
  mobile: "",
  email: "",
  address: "",
  landmark: "",
  lga: "",
  state: "",
  materials: [],
  operationType: "",
  collectionFrequency: "",
  volume: "",
  idUpload: null,
  consent: false,
});

const handleSubmit = () => {
  if (!form.consent) {
    alert("You must agree to the consent before submitting.");
    return;
  }

  console.log("Form Submitted ✅", form);
};

const handleFileUpload = (event) => {
  form.idUpload = event.target.files[0];
};
</script>
