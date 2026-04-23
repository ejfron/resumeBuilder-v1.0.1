<template>
  <div class="mt-3">
      <div class="flex gap-3 text-blue-500">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <div class="font-semibold text-lg">About / Summary</div>
      </div>
      <div class="w-full mt-5">
        <div class="w-full">
          <textarea name="AboutYourself" id="AboutYourself" class="border-2 border-gray-300 px-2.5 py-1 text-gray-500 resize-none w-full h-56" placeholder="Tell us about yourself..." v-model="resume.about"></textarea>
        </div>
        <div class="relative flex justify-end gap-2 items-center mt-2">
          <div class="">{{ resume.about.length }}/500</div> 
          <button class="bg-blue-500 text-white cursor-pointer px-4 py-1.5 rounded right-0 hover:bg-blue-600">Save</button>
          
        </div>
      </div>
  </div>

</template>

<script setup>
import { useResume } from '~/composables/useResume'
const { resume } = useResume()
</script>