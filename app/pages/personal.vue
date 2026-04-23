<template>
  <div class="mt-3">
    <div class="flex items-center content-start text-blue-500 gap-2 mb-4 w-fit">
      <div class="personIcon">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </div>
      <div class="text-lg font-semibold">
        Personal Information
      </div>
    </div>

    <div id="content" class="flex flex-col gap-3 w-full mt-6">
      <!-- Row 1: Full Name & Professional Title -->
      <div class="flex justify-start items-start gap-12 flex-wrap w-full">
        <div class="flex flex-col items-start gap-2 mb-4 flex-1">
          <label for="name" class="text-gray-800 text-medium font-medium">Full Name</label>
          <input v-model="resume.personal.name" class="input w-full text-gray-700 border-2 border-gray-300 py-2 px-3" placeholder="Name" />
        </div>

        <div class="flex flex-col items-start gap-2 mb-4 flex-1">
          <label for="title" class="text-gray-800 text-medium font-medium">Professional Title</label>
          <input v-model="resume.personal.title" class="input w-full text-gray-500 border-2 border-gray-300 py-2 px-3" placeholder="Title" />
        </div>
      </div>

      <!-- Row 2: Email & Phone -->
      <div class="flex justify-start items-start gap-12 flex-wrap w-full">
        <div class="flex flex-col items-start gap-2 mb-4  flex-1">
          <label for="email" class="text-gray-800 text-medium font-medium">Email</label>
          <input v-model="resume.personal.email" class="input w-full text-gray-700 border-2 border-gray-300 py-2 px-3" placeholder="Email" />
        </div>

        <div class="flex flex-col items-start gap-2 mb-4 flex-1">
          <label for="phone" class="text-gray-800 text-medium font-medium">Phone</label>
          <input v-model="resume.personal.phone" class="input w-full text-gray-700 border-2 border-gray-300 py-2 px-3" placeholder="Phone" />
        </div>
      </div>

      <!-- Row 3: Portfolio / Website (full width) -->
      <div class="flex flex-col items-start gap-2 mb-4  w-full">
        <label for="portfolio" class="text-gray-800 text-medium font-medium">Portfolio / Website</label>
        <input v-model="resume.personal.portfolio" class="input w-full text-gray-700 border-2 border-gray-300 py-2 px-3" placeholder="Portfolio" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useResume } from '~/composables/useResume'

const { resume } = useResume()

</script>