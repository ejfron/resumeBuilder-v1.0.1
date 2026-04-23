<template>
  <div class="mt-3">
    <div class="flex items-center gap-2 mb-4 text-blue-500">
      <div class="icontitle">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
        </svg>
      </div>
      <div class="font-semibold text-lg">Skills</div>
    </div>

    <div class="flex flex-col gap-2 w-full">
      <!-- Input + Add button -->
      <div id="addingcontent" class="flex items-center justify-center gap-3">
        <input v-model="input" class="input w-fit border-2 text-medium border-gray-300 px-2.5 py-1 flex-1 text-gray-500" placeholder="Add a skill (e.g React.js)" />
        <button class="bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-600" @click="addSkillFromInput">Add</button>
      </div>

    
    <div id="skillsdisplaytoadd" class="flex flex-wrap gap-2 mt-3   text-gray-700 text-sm">
            <div
            v-for="(skill, i) in availableSkills"
            :key="i"
           class="badge bg-gray-100 rounded-4xl flex items-center content-center gap-2.5 px-5 py-1.5 cursor-pointer hover:bg-gray-200 hover:text-blue-500"
            @click="addSkillFromSuggest(skill)"
            >
            <span>{{ skill }}</span>
        </div>
        </div>

    </div>

    <!-- Display added skills (from resume) with remove icon -->
    <div class="flex flex-wrap gap-2 mt-6  text-gray-700 text-sm">
      <div
        v-for="(skill, index) in resume.skills"
        :key="index"
        class="badge bg-gray-100 rounded-4xl flex items-center content-center gap-2.5 px-5 py-1.5 cursor-pointer hover:bg-gray-200 hover:text-blue-500"
      >
        <span>{{ skill }}</span>
        <span @click="removeSkill(index)">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useResume } from '~/composables/useResume'
import { dataSkills } from '~/composables/dataskills'

const { resume } = useResume()
const input = ref('')

// Create a reactive copy of the suggestion list
const availableSkills = ref([...dataSkills])

// Add skill from input
const addSkillFromInput = () => {
  const skill = input.value.trim()
  if (skill && !resume.value.skills.includes(skill)) {
    resume.value.skills.push(skill)
    // Optionally remove from suggestions if it exists there
    const index = availableSkills.value.indexOf(skill)
    if (index !== -1) availableSkills.value.splice(index, 1)
    input.value = ''
  }
}

// Add skill from suggestion and remove it from the suggestion list
const addSkillFromSuggest = (skillName) => {
  const skill = skillName.trim()
  if (skill && !resume.value.skills.includes(skill)) {
    resume.value.skills.push(skill)
    // Remove from available suggestions
    const index = availableSkills.value.indexOf(skill)
    if (index !== -1) availableSkills.value.splice(index, 1)
  }
}

// Remove skill from resume – optionally add it back to suggestions? 
// (Not requested, but often desired. I'll leave it out for now.)
const removeSkill = (index) => {
  resume.value.skills.splice(index, 1)
}
</script>