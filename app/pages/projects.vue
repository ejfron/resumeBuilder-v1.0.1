<template>
  <div class="mt-3">

    <!-- HEADER -->
    <div class="flex gap-3 items-center">
      <div class="text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-closed-icon lucide-folder-closed"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M2 10h20"/></svg>
      </div>
      <div class="text-blue-500 text-lg font-semibold">Projects</div>
    </div>

    <!-- LIST -->
    <div v-for="(pro, index) in projects" :key="index"
      class="border-2 flex border-gray-300 p-4 mt-5 rounded relative">

      <div 
        @click="removeProject(index)"
          v-if="projects.length > 1"
         
      class="absolute right-3 top-2 text-gray-400 cursor-pointer hover:text-red-400 disabled:cursor-not-allowed" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </div>
      
          <div class="flex items-start justify-start pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical-icon lucide-grip-vertical"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
            
          </div>
          <div class="flex flex-col">
             
               <div class="flex items-center justify-between">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full">

  <!-- Project Name -->
  <div class="flex flex-col gap-2">
    <label class="text-gray-800 font-medium">Project Name</label>
    <input 
      v-model="pro.projectname"
      class="w-full border-2 border-gray-300 text-gray-800 py-2 px-3 text-sm md:text-base"
      placeholder="Project Name"
    />
  </div>

  <!-- Project Link -->
  <div class="flex flex-col gap-2">
    <label class="text-gray-800 font-medium">Project Link</label>
    <input 
      v-model="pro.projectlink"
      class="w-full border-2 border-gray-300 text-gray-800 py-2 px-3 text-sm md:text-base"
      placeholder="https://..."
    />
  </div>

</div>


        

      </div>

      <!-- DESCRIPTION -->
      <div class="mt-3">
        <label class="font-medium">Description</label>
        <textarea v-model="pro.projectdescription"
          class="resize-none border-2 h-24 border-gray-300 text-gray-800 py-2 px-4 w-full"
          placeholder="Project description"></textarea>
      </div>

      <div class="mt-3">
        <label class="font-medium">Tech Stack</label>

        <!-- INPUT -->
        <div class="flex gap-2 mt-1">
          <input
            v-model="stackInputs[index]"
            @keyup.enter="addTech(index)"
            class="border-2 border-gray-300 text-gray-800 py-2 px-4 w-full"
            placeholder="Add tech (press Enter)"
          />
          <button
            @click="addTech(index)"
            class="px-3 bg-blue-500 text-white rounded"
          >
            Add
          </button>
        </div>

        <!-- TAGS -->
        <div class="flex flex-wrap gap-2 mt-6">
          <span
            v-for="(tech, t) in pro.projectstack"
            :key="t"
            class="bg-blue-100 text-blue-600 px-2 py-1 rounded text-medium cursor-pointer"
            @click="removeTech(index, t)"
          >
            {{ tech }} ✕
          </span>
        </div>
      </div>
          </div>

   

    </div>

    <!-- ADD BUTTON -->
    <div class="flex justify-end mt-4">
      <button @click="addProject()"
        class="bg-white text-blue-500 px-4 py-1.5 flex gap-2 rounded border-2 border-blue-500 hover:bg-blue-100">
        + Add Project
      </button>
    </div>

  </div>
</template>

<script setup>
import {  reactive  } from 'vue'

const { resume } = useResume()
const projects = resume.value.project

const addProject = () => {
  projects.unshift({
      projectname: '',
      projectlink: '',
      projectdescription: '',
      projectstack: 
      [
            
      ]
  })
}

const removeProject = (index) => {
  if (projects.length <= 1) return
  projects.splice(index, 1)
}

// store input per project index
const stackInputs = reactive({})

const addTech = (index) => {
  const value = stackInputs[index]

  if (!value) return

  projects[index].projectstack.push(value.trim())
  stackInputs[index] = ''
}

const removeTech = (projectIndex, techIndex) => {
  projects[projectIndex].projectstack.splice(techIndex, 1)
}
</script>