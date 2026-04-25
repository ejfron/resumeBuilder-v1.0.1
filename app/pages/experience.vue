<template>
  <div>
    <div class="mt-3">
      
      <!-- HEADER -->
      <div class="flex gap-3 items-center justify-start">
        <div class="text-blue-500">
          <!-- SVG unchanged -->
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-business-icon lucide-briefcase-business">
            <path d="M12 12h.01"/>
            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            <path d="M22 13a18.15 18.15 0 0 1-20 0"/>
            <rect width="20" height="14" x="2" y="6" rx="2"/>
          </svg>
        </div>
        <div class="text-blue-500 text-lg font-semibold">Experience</div>
      </div>

      <!-- EXPERIENCES -->
      <div id="contentExperience" >
        <div v-for="(exp, index) in experiences" :key="index" class="flex border-2 border-gray-300 p-4 mt-5 rounded relative">
          <div v-if="experiences.length > 1" class="absolute right-3 top-2 text-gray-400 cursor-pointer hover:text-red-500" @click="RemoveExperience(index)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </div>
          <div class=" flex items-start justify-start pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical-icon lucide-grip-vertical"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
          </div>
          <div class="flex flex-col">

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full">

  <!-- Company -->
  <div class="flex flex-col gap-2">
    <label class="text-gray-800 font-medium">Company</label>
    <input 
      v-model="exp.company"
      class="w-full border-2 border-gray-300 text-gray-800 py-2 px-3 text-sm md:text-base"
      placeholder="Company"
    />
  </div>

  <!-- Role -->
  <div class="flex flex-col gap-2">
    <label class="text-gray-800 font-medium">Role</label>
    <input 
      v-model="exp.role"
      class="w-full border-2 border-gray-300 text-gray-800 py-2 px-3 text-sm md:text-base"
      placeholder="Role"
    />
  </div>

        </div>
          
          <div>
            <div class="flex flex-col mt-4">
              <label class="text-gray-700 font-medium">Duration</label>
              <input 
                v-model="exp.date"
                class="border-2 border-gray-300 text-gray-800 py-2 px-4" 
                placeholder="2019-2023" 
              />
            </div>

            <div class="flex flex-col mt-3 gap-2">
              <label class="text-gray-700 font-medium">Description</label>
              <textarea 
                v-model="exp.description"
                class="resize-none border-2 h-32 border-gray-300 text-gray-800 py-2 px-4" 
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          </div>

          

        </div>
      </div>

      <!-- BUTTON -->
      <div class="flex justify-end mt-4">
        <button 
          @click="addExperience"
          class="bg-white text-blue-500 px-4 py-1.5 flex align-center justify-center gap-2 cursor-pointer rounded border-2 border-blue-500 hover:bg-blue-100"
        >
          <div class="flex align-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus">
              <path d="M5 12h14"/>
              <path d="M12 5v14"/>
            </svg>
          </div>
          <div>Add Experience</div>
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { resume } = useResume()
const experiences =  resume.value.experience

const addExperience = () => {
  experiences.unshift({
    company: '',
    role: '',
    date: '',
    description: ''
  })
}

const RemoveExperience = (index) => {
  if (experiences.length <= 1) return

  experiences.splice(index, 1)
}




</script>