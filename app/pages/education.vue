<template>
  <div class="mt-3">

    <!-- HEADER -->
    <div class="flex gap-3 items-center">
      <div class="text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
      </div>
      <div class="text-blue-500 text-lg font-semibold">Education</div>
    </div>

    <!-- LIST -->
    <div v-for="(edu, index) in educations" :key="index"
      class="border-2 border-gray-300 p-4 mt-5 rounded relative">
       <div 
        @click="removeEducation(index)"
          :disabled="educations.length === 1"

       class="absolute right-3 top-2 text-red-400 cursor-pointer hover:text-red-500 disabled:opacity-40 disabled:cursor-not-allowed" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </div>

      <div class="flex items-center justify-between">

        <div class="flex gap-6 w-full">

          <div class="flex flex-col gap-1.5 w-1/2">
            <label class="text-gray-800 font-medium">School</label>
            <input v-model="edu.school"
              class="border-2 border-gray-300 text-gray-800 py-2 px-4"
              placeholder="University Name" />
          </div>

          <div class="flex flex-col gap-1.5 w-1/2">
            <label class="text-gray-800 font-medium">Degree</label>
            <input v-model="edu.degree"
              class="border-2 border-gray-300 text-gray-800 py-2 px-4"
              placeholder="Degree" />
          </div>

        </div>



      </div>

      <!-- FIELD -->
      <div class="mt-3">
        <label class="font-medium">Field of Study</label>
        <input v-model="edu.field"
          class="border-2 border-gray-300 text-gray-800 py-2 px-4 w-full"
          placeholder="Computer Science" />
      </div>

      <!-- DURATION -->
      <div class="mt-3">
        <label class="font-medium">Duration</label>
        <input v-model="edu.duration"
          class="border-2 border-gray-300 text-gray-800 py-2 px-4 w-full"
          placeholder="2019 - 2023" />
      </div>

      <!-- LOCATION -->
      <div class="mt-3">
        <label class="font-medium">Location</label>
        <input v-model="edu.location"
          class="border-2 border-gray-300 text-gray-800 py-2 px-4 w-full"
          placeholder="City, Country" />
      </div>

    </div>

    <!-- ADD BUTTON -->
    <div class="flex justify-end mt-4">
      <button @click="addEducation"
        class="bg-white text-blue-500 px-4 py-1.5 flex gap-2 rounded border-2 border-blue-500 hover:bg-blue-100">
        + Add Education
      </button>
    </div>

  </div>
</template>

<script setup>

const { resume } = useResume()
const educations = resume.value.education


const addEducation = () => {
  educations.unshift({
    school: '',
    degree: '',
    field: '',
    duration: '',
    location: ''
  })
}

const removeEducation = (index) => {
  if (educations.length <= 1) return
  educations.splice(index, 1)
}


onMounted(() => {
  if (educations.length === 0) {
    educations.push({
      school: '',
      degree: '',
      field: '',
      duration: '',
      location: ''
    })
  }
})
</script>