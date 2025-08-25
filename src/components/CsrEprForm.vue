<template>
  <div class="flex items-center justify-center mt-20">
    <div class="max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-2xl mt-10">
      <!-- Main Heading -->
      <h1 class="text-3xl font-bold mb-6 text-green-600">
        Advance Your CSR & EPR Goals With Us
      </h1>

      <form @submit.prevent="handleSubmit" class="space-y-6 text-gray-700">
        <!-- Organization Name -->
        <div>
          <label class="block font-semibold mb-1"
            >Name of Organization / Entity</label
          >
          <input
            v-model="form.organizationName"
            type="text"
            placeholder="Enter the registered name"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 border-gray-300 placeholder-gray-400"
            required
          />
        </div>

        <!-- Organization Type -->
        <div>
          <label class="block font-semibold mb-2">Type of Organization</label>
          <select
            v-model="form.organizationType"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 border-gray-300"
            required
          >
            <option value="">Select One</option>
            <option>Company</option>
            <option>Manufacturer / Producer</option>
            <option>Non-Governmental Organization (NGO)</option>
            <option>Academic / Health / Faith-based Institution</option>
            <option>Estate / Residential Community</option>
            <option>Other</option>
          </select>
        </div>

        <!-- Industry Sector -->
        <div>
          <label class="block font-semibold mb-1"
            >Industry Sector / Area of Focus</label
          >
          <input
            v-model="form.sector"
            type="text"
            placeholder="e.g. Manufacturing, Education"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 border-gray-300 placeholder-gray-400"
          />
        </div>

        <!-- Contact Details -->
        <div>
          <label class="block font-semibold mb-1">Contact Person Name</label>
          <input
            v-model="form.contactName"
            type="text"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 border-gray-300 placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label class="block font-semibold mb-1">Position / Role</label>
          <input
            v-model="form.position"
            type="text"
            placeholder="e.g. CSR Manager"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 border-gray-300 placeholder-gray-400"
          />
        </div>

        <div>
          <label class="block font-semibold mb-1">Phone Number</label>
          <input
            v-model="form.phone"
            type="tel"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 border-gray-300 placeholder-gray-400"
          />
        </div>

        <div>
          <label class="block font-semibold mb-1">Email Address</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 border-gray-300 placeholder-gray-400"
          />
        </div>

        <div>
          <label class="block font-semibold mb-1">Office Address</label>
          <textarea
            v-model="form.address"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 border-gray-300 placeholder-gray-400"
          ></textarea>
        </div>

        <!-- LGA & State -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block font-semibold mb-1"
              >Local Government Area (LGA)</label
            >
            <input
              v-model="form.lga"
              type="text"
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 border-gray-300 placeholder-gray-400"
            />
          </div>
          <div>
            <label class="block font-semibold mb-1">State</label>
            <input
              v-model="form.state"
              type="text"
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 border-gray-300 placeholder-gray-400"
            />
          </div>
        </div>

        <!-- EPR Registration Status -->
        <div>
          <label class="block font-semibold mb-2"
            >Are you registered under any EPR compliance scheme?</label
          >
          <select
            v-model="form.eprStatus"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 border-gray-300"
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
            <option>In Progress</option>
          </select>
        </div>

        <!-- CSR/EPR Areas -->
        <div>
          <label class="block font-semibold mb-2"
            >Areas of CSR/EPR Investment Interest</label
          >
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <label
              ><input
                type="checkbox"
                value="PET Bottles / Plastic Waste Collection"
                v-model="form.csrInterests"
              />
              PET Bottles / Plastic Waste Collection</label
            >
            <label
              ><input
                type="checkbox"
                value="E-Waste Management"
                v-model="form.csrInterests"
              />
              E-Waste Management</label
            >
            <label
              ><input
                type="checkbox"
                value="Used Battery Recovery"
                v-model="form.csrInterests"
              />
              Used Battery Recovery</label
            >
            <label
              ><input
                type="checkbox"
                value="Organic Waste Solutions"
                v-model="form.csrInterests"
              />
              Organic Waste Solutions</label
            >
            <label
              ><input
                type="checkbox"
                value="Public Waste Infrastructure"
                v-model="form.csrInterests"
              />
              Public Waste Infrastructure</label
            >
            <label
              ><input
                type="checkbox"
                value="Community-Based Waste Education"
                v-model="form.csrInterests"
              />
              Community-Based Waste Education</label
            >
            <label
              ><input
                type="checkbox"
                value="School-Based Environmental Programs"
                v-model="form.csrInterests"
              />
              School-Based Environmental Programs</label
            >
            <label
              ><input
                type="checkbox"
                value="Capacity Building for Informal Waste Collectors"
                v-model="form.csrInterests"
              />
              Capacity Building for Informal Waste Collectors</label
            >
          </div>
        </div>

        <!-- Waste Commitment -->
        <div>
          <label class="block font-semibold mb-1"
            >Estimated Monthly Waste Recovery Commitment</label
          >
          <input
            v-model="form.wasteCommitment"
            type="text"
            placeholder="e.g. 500kg or 2 tons"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 border-gray-300 placeholder-gray-400"
          />
        </div>

        <!-- Uploads -->
        <div>
          <label class="block font-semibold mb-1"
            >Upload Organization Logo (Optional)</label
          >
          <input
            type="file"
            @change="(e) => handleFileUpload(e, 'logo')"
            accept=".jpg,.png,.svg"
          />
        </div>

        <div>
          <label class="block font-semibold mb-1"
            >Upload CSR/EPR Policy or Report (Optional)</label
          >
          <input
            type="file"
            @change="(e) => handleFileUpload(e, 'policyFile')"
            accept=".pdf,.doc,.ppt"
          />
        </div>

        <!-- Consent -->
        <div class="flex items-center">
          <input v-model="form.consent" type="checkbox" class="mr-2" />
          <span>
            By submitting this form, you agree to partner with ZWMF and consent
            to collaboration and compliance support.
          </span>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition"
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
  organizationName: "",
  organizationType: "",
  sector: "",
  contactName: "",
  position: "",
  phone: "",
  email: "",
  address: "",
  lga: "",
  state: "",
  eprStatus: "",
  csrInterests: [],
  wasteCommitment: "",
  logo: null,
  policyFile: null,
  consent: false,
});

const handleSubmit = () => {
  if (!form.consent) {
    alert("⚠️ Please agree to the consent before submitting.");
    return;
  }

  console.log("Form Submitted ✅", form);
};

const handleFileUpload = (event, type) => {
  const file = event.target.files[0];
  if (type === "logo") form.logo = file;
  if (type === "policyFile") form.policyFile = file;
};
</script>
