<template>
  <div class="mt-3">

    <!-- HEADER -->
    <div class="flex items-center gap-2 mb-4 text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="m18 16 4-4-4-4"/>
        <path d="m6 8-4 4 4 4"/>
        <path d="m14.5 4-5 16"/>
      </svg>
      <div class="font-semibold text-lg">Skills</div>
    </div>

    <!-- INPUT -->
    <div class="flex gap-3 w-full">
      <input
        v-model="input"
        @keyup.enter="addSkillFromInput"
        class="w-full border-2 text-gray-600 border-gray-300 px-3 py-2 rounded text-sm focus:outline-none focus:border-blue-500"
        placeholder="Add a skill (e.g React.js)"
      />
      <button
        @click="addSkillFromInput"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 whitespace-nowrap"
      >
        Add
      </button>
    </div>

    <!-- SUGGESTED SKILLS (DYNAMIC) -->
    <div class="mt-5 space-y-4 text-sm text-gray-700">
      <div
        v-for="(skills, category) in skillGroups"
        :key="category"
      >
        <h3 class="font-medium mb-2 capitalize">
          {{ formatCategory(category) }}
        </h3>

        <div class="flex flex-wrap gap-2">
          <div
            v-for="(skill, i) in skills"
            :key="category + '-' + i"
            @click="addSkillFromSuggest(skill)"
            class="px-4 py-1.5 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 hover:text-blue-500"
          >
            {{ skill }}
          </div>
        </div>
      </div>
    </div>

    <!-- SELECTED SKILLS -->
    <div class="flex flex-wrap gap-2 mt-6 text-sm text-gray-700">
      <div
        v-for="(skill, index) in resume.skills"
        :key="index"
        class="flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-full hover:bg-gray-200"
      >
        <span>{{ skill }}</span>
        <button @click="removeSkill(index)" class="hover:text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useResume } from '~/composables/useResume'
import { dataSkills } from '~/composables/dataskills'

const { resume } = useResume()
const input = ref('')

// 🔥 dynamic skill groups
const skillGroups = ref(JSON.parse(JSON.stringify(dataSkills)))

// format category names
const formatCategory = (key) => {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
}

// Add from input
const addSkillFromInput = () => {
  const skill = input.value.trim()
  if (!skill || resume.value.skills.includes(skill)) return

  resume.value.skills.push(skill)
  removeFromAllGroups(skill)

  input.value = ''
}

// Add from suggestion
const addSkillFromSuggest = (skill) => {
  if (resume.value.skills.includes(skill)) return

  resume.value.skills.push(skill)
  removeFromAllGroups(skill)
}

// 🔥 remove from ALL categories
const removeFromAllGroups = (skill) => {
  Object.keys(skillGroups.value).forEach(category => {
    const index = skillGroups.value[category].indexOf(skill)
    if (index !== -1) {
      skillGroups.value[category].splice(index, 1)
    }
  })
}

// Remove skill
const removeSkill = (index) => {
  const removedSkill = resume.value.skills[index]
  resume.value.skills.splice(index, 1)

  // return to correct category
  Object.keys(dataSkills).forEach(category => {
    if (dataSkills[category].includes(removedSkill)) {
      const originalIndex = dataSkills[category].indexOf(removedSkill)
      skillGroups.value[category].splice(originalIndex, 0, removedSkill)
    }
  })
}
</script>