<template>
  <section class="py-24 bg-gray-50 min-h-screen">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-light text-gray-900 mb-4">
          Zero Waste Mutual Fund
        </h1>
        <p class="text-xl text-gray-600 font-light mb-2">
          CSR / EPR Impact Registration
        </p>
        <p class="text-lg text-gray-500 font-light max-w-3xl mx-auto">
          Join our network of impact investors building a circular economy for
          Nigeria through responsible waste management and environmental
          sustainability.
        </p>
      </div>

      <!-- Progress Indicator -->
      <div class="mb-12">
        <div class="flex items-center justify-center space-x-4">
          <div v-for="step in 3" :key="step" class="flex items-center">
            <div
              :class="[
                'w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300',
                currentStep >= step
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-200 text-gray-500',
              ]"
            >
              {{ step }}
            </div>
            <div
              v-if="step < 3"
              :class="[
                'w-16 h-0.5 mx-2 transition-all duration-300',
                currentStep > step ? 'bg-emerald-600' : 'bg-gray-200',
              ]"
            ></div>
          </div>
        </div>
        <div class="flex justify-center mt-4">
          <div class="text-center">
            <p class="text-sm text-gray-600 font-medium">
              Step {{ currentStep }} of 3: {{ stepTitles[currentStep - 1] }}
            </p>
          </div>
        </div>
      </div>

      <!-- Form Container -->
      <div class="bg-white rounded-3xl p-12 hover-lift border border-gray-100">
        <form @submit.prevent="handleSubmit">
          <!-- Step 1: Organization Details -->
          <div v-if="currentStep === 1" class="space-y-8">
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
                    d="M2.25 21h19.5m-18-18v18m2.25-18v18m13.5-18v18m2.25-18v18M6.75 9h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.75m-.75 3h.75m-.75 3h.75m-3.75-16.5h3.75A2.25 2.25 0 0 1 21 4.5v1.69l-1.05.53a1.5 1.5 0 0 1-1.34 0l-.5-.25a1.5 1.5 0 0 0-1.34 0l-.5.25a1.5 1.5 0 0 1-1.34 0L13.5 6.2V4.5a2.25 2.25 0 0 1 2.25-2.25Z"
                  />
                </svg>
              </div>
              <h2 class="text-2xl font-medium text-gray-900">
                Organization Details
              </h2>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Name of Organization / Entity *
                </label>
                <input
                  v-model="formData.organizationName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 text-neutral-900 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Enter the registered name of your organization"
                />
              </div>

              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-3">
                  Type of Organization *
                </label>
                <div class="grid md:grid-cols-2 gap-3">
                  <div
                    v-for="type in organizationTypes"
                    :key="type.value"
                    @click="formData.organizationType = type.value"
                    :class="[
                      'p-4 border rounded-xl cursor-pointer transition-all duration-200 hover:border-emerald-300',
                      formData.organizationType === type.value
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:bg-gray-50',
                    ]"
                  >
                    <div class="flex items-center">
                      <input
                        type="radio"
                        :value="type.value"
                        v-model="formData.organizationType"
                        class="text-emerald-600 focus:ring-emerald-500 mr-3"
                      />
                      <span class="text-gray-700">{{ type.label }}</span>
                    </div>
                  </div>
                </div>

                <div v-if="formData.organizationType === 'other'" class="mt-4">
                  <input
                    v-model="formData.otherType"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 text-neutral-900 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Please specify other type"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Industry Sector / Area of Focus
                </label>
                <input
                  v-model="formData.industrySector"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 text-neutral-900 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="e.g., Manufacturing, Packaging, Electronics"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Registration Number (CAC)
                </label>
                <input
                  v-model="formData.registrationNumber"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 text-neutral-900 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="For verification (optional)"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person Name *
                </label>
                <input
                  v-model="formData.contactPersonName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 text-neutral-900 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Full name of designated representative"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Position / Role *
                </label>
                <input
                  v-model="formData.position"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 text-neutral-900 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="e.g., CSR Manager, EPR Officer"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  v-model="formData.phoneNumber"
                  type="tel"
                  required
                  class="w-full px-4 py-3 border border-gray-300 text-neutral-900 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Official contact number"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  v-model="formData.emailAddress"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 text-neutral-900 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Preferably corporate email"
                />
              </div>

              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Office Address *
                </label>
                <textarea
                  v-model="formData.officeAddress"
                  required
                  rows="3"
                  class="w-full px-4 py-3 border border-gray-300 text-neutral-900 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Street, city/town, and nearest landmark"
                ></textarea>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Local Government Area *
                </label>
                <input
                  v-model="formData.lga"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 text-neutral-900 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Select LGA"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <select
                  v-model="formData.state"
                  required
                  class="w-full px-4 py-3 border border-gray-300 text-neutral-900 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Select State</option>
                  <option
                    v-for="state in nigerianStates"
                    :key="state"
                    :value="state"
                  >
                    {{ state }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <!-- Step 2: CSR/EPR Investment Focus -->
          <div v-if="currentStep === 2" class="space-y-8">
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
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <h2 class="text-2xl font-medium text-gray-900">
                CSR / EPR Investment Focus
              </h2>
            </div>

            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3">
                  Are you currently registered under any EPR compliance scheme?
                  *
                </label>
                <div class="flex space-x-4">
                  <label
                    v-for="option in eprOptions"
                    :key="option"
                    class="flex items-center"
                  >
                    <input
                      type="radio"
                      :value="option"
                      v-model="formData.eprRegistered"
                      class="text-emerald-600 focus:ring-emerald-500 mr-2"
                    />
                    <span class="text-gray-700">{{ option }}</span>
                  </label>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-4">
                  Areas of CSR/EPR Investment Interest (select all that apply) *
                </label>
                <div class="grid md:grid-cols-2 gap-3">
                  <div
                    v-for="area in investmentAreas"
                    :key="area"
                    @click="toggleInvestmentArea(area)"
                    :class="[
                      'p-4 border rounded-xl cursor-pointer transition-all duration-200 hover:border-emerald-300',
                      formData.investmentAreas.includes(area)
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:bg-gray-50',
                    ]"
                  >
                    <div class="flex items-start">
                      <input
                        type="checkbox"
                        :checked="formData.investmentAreas.includes(area)"
                        @change="toggleInvestmentArea(area)"
                        class="text-emerald-600 focus:ring-emerald-500 mr-3 mt-1"
                      />
                      <span class="text-gray-700 text-sm">{{ area }}</span>
                    </div>
                  </div>
                </div>

                <div
                  v-if="formData.investmentAreas.includes('Others')"
                  class="mt-4"
                >
                  <input
                    v-model="formData.otherInvestmentArea"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 text-neutral-900 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Please specify other investment areas"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Monthly Waste Recovery Commitment
                </label>
                <input
                  v-model="formData.wasteCommitment"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 text-neutral-900 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Optional - in kg or tons (useful for impact tracking)"
                />
              </div>
            </div>
          </div>

          <!-- Step 3: Documents & Consent -->
          <div v-if="currentStep === 3" class="space-y-8">
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
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </div>
              <h2 class="text-2xl font-medium text-gray-900">
                Documents & Consent
              </h2>
            </div>

            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Upload Organization Logo (Optional)
                </label>
                <div
                  class="border-2 border-dashed border-gray-300 text-neutral-900 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors"
                >
                  <input
                    type="file"
                    @change="handleLogoUpload"
                    accept=".jpg,.jpeg,.png,.svg"
                    class="hidden"
                    ref="logoInput"
                  />
                  <div @click="$refs.logoInput.click()" class="cursor-pointer">
                    <svg
                      class="w-12 h-12 text-gray-400 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p class="text-gray-600">Click to upload logo</p>
                    <p class="text-sm text-gray-500 mt-1">
                      Accepted formats: JPG, PNG, SVG
                    </p>
                  </div>
                  <p v-if="formData.logo" class="text-emerald-600 mt-2">
                    ✓ {{ formData.logo.name }}
                  </p>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Upload CSR/EPR Policy or Sustainability Report (Optional)
                </label>
                <div
                  class="border-2 border-dashed border-gray-300 text-neutral-900 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors"
                >
                  <input
                    type="file"
                    @change="handleDocumentUpload"
                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                    class="hidden"
                    ref="documentInput"
                  />
                  <div
                    @click="$refs.documentInput.click()"
                    class="cursor-pointer"
                  >
                    <svg
                      class="w-12 h-12 text-gray-400 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                    <p class="text-gray-600">Click to upload documents</p>
                    <p class="text-sm text-gray-500 mt-1">
                      Accepted formats: PDF, DOC, PPT
                    </p>
                  </div>
                  <p v-if="formData.documents" class="text-emerald-600 mt-2">
                    ✓ {{ formData.documents.name }}
                  </p>
                </div>
              </div>

              <div
                class="bg-emerald-50 border border-emerald-200 rounded-xl p-6"
              >
                <h3 class="text-lg font-medium text-gray-900 mb-4">
                  Consent & Commitment
                </h3>
                <div class="space-y-4">
                  <label class="flex items-start">
                    <input
                      type="checkbox"
                      v-model="formData.consentPartnership"
                      required
                      class="text-emerald-600 focus:ring-emerald-500 mr-3 mt-1"
                    />
                    <span class="text-gray-700 text-sm">
                      I agree to partner with the Zero Waste Mutual Fund in
                      advancing our organization's CSR/EPR goals.
                    </span>
                  </label>

                  <label class="flex items-start">
                    <input
                      type="checkbox"
                      v-model="formData.consentContact"
                      required
                      class="text-emerald-600 focus:ring-emerald-500 mr-3 mt-1"
                    />
                    <span class="text-gray-700 text-sm">
                      I consent to be contacted for collaboration, reporting,
                      compliance support, and co-implementation of
                      sustainability projects.
                    </span>
                  </label>

                  <label class="flex items-start">
                    <input
                      type="checkbox"
                      v-model="formData.consentData"
                      required
                      class="text-emerald-600 focus:ring-emerald-500 mr-3 mt-1"
                    />
                    <span class="text-gray-700 text-sm">
                      I understand that all data will be treated with
                      confidentiality and used strictly for environmental impact
                      purposes.
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex justify-between mt-12">
            <button
              v-if="currentStep > 1"
              @click="currentStep--"
              type="button"
              class="flex items-center px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              Previous
            </button>
            <div v-else></div>

            <button
              v-if="currentStep < 3"
              @click="nextStep"
              type="button"
              class="flex items-center px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors"
            >
              Next
              <svg
                class="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>

            <button
              v-if="currentStep === 3"
              type="submit"
              class="flex items-center px-8 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-medium"
            >
              Submit Registration
              <svg
                class="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ZWMFRegistrationForm",
  data() {
    return {
      currentStep: 1,
      stepTitles: [
        "Organization Details",
        "CSR/EPR Investment Focus",
        "Documents & Consent",
      ],
      formData: {
        organizationName: "",
        organizationType: "",
        otherType: "",
        industrySector: "",
        registrationNumber: "",
        contactPersonName: "",
        position: "",
        phoneNumber: "",
        emailAddress: "",
        officeAddress: "",
        lga: "",
        state: "",
        eprRegistered: "",
        investmentAreas: [],
        otherInvestmentArea: "",
        wasteCommitment: "",
        logo: null,
        documents: null,
        consentPartnership: false,
        consentContact: false,
        consentData: false,
      },
      organizationTypes: [
        { value: "company", label: "Company" },
        { value: "manufacturer", label: "Manufacturer / Producer" },
        { value: "ngo", label: "Non-Governmental Organization (NGO)" },
        {
          value: "institution",
          label: "Academic / Health / Faith-based Institution",
        },
        { value: "estate", label: "Estate / Residential Community" },
        { value: "other", label: "Other" },
      ],
      eprOptions: ["Yes", "No", "In Progress"],
      investmentAreas: [
        "PET Bottles / Plastic Waste Collection",
        "E-Waste Management (electronics, cables, batteries)",
        "Used Battery Recovery",
        "Organic Waste Solutions (e.g., composting, biogas)",
        "Public Waste Infrastructure (eco-hubs, recycling centers)",
        "Community-Based Waste Education",
        "School-Based Environmental Programs",
        "Capacity Building for Informal Waste Collectors",
        "Sustainability Programs",
        "Others",
      ],
      nigerianStates: [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "FCT",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara",
      ],
    };
  },
  methods: {
    nextStep() {
      if (this.validateCurrentStep()) {
        this.currentStep++;
      }
    },
    validateCurrentStep() {
      if (this.currentStep === 1) {
        const required = [
          "organizationName",
          "organizationType",
          "contactPersonName",
          "position",
          "phoneNumber",
          "emailAddress",
          "officeAddress",
          "lga",
          "state",
        ];
        return required.every((field) => this.formData[field].trim() !== "");
      }
      if (this.currentStep === 2) {
        return (
          this.formData.eprRegistered &&
          this.formData.investmentAreas.length > 0
        );
      }
      if (this.currentStep === 3) {
        return (
          this.formData.consentPartnership &&
          this.formData.consentContact &&
          this.formData.consentData
        );
      }
      return true;
    },
    toggleInvestmentArea(area) {
      const index = this.formData.investmentAreas.indexOf(area);
      if (index > -1) {
        this.formData.investmentAreas.splice(index, 1);
      } else {
        this.formData.investmentAreas.push(area);
      }
    },
    handleLogoUpload(event) {
      this.formData.logo = event.target.files[0];
    },
    handleDocumentUpload(event) {
      this.formData.documents = event.target.files[0];
    },
    handleSubmit() {
      if (this.validateCurrentStep()) {
        console.log("Form submitted:", this.formData);
        alert("Registration submitted successfully! We will contact you soon.");
      }
    },
  },
};
</script>

<style scoped>
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
