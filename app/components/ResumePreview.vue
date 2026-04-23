<template>
  <div
    id="resume-preview"
    class="bg-white p-8 h-full text-sm text-gray-700"
  >
    <!-- HEADER -->
    <div class="flex items-center gap-4 border-b pb-5">
      <!-- <img
        src="https://i.pravatar.cc/100"
        class="w-16 h-16 rounded-full object-cover"
      /> -->

      <div class="flex-1">
        <h1 class="text-2xl font-bold text-gray-800">
          {{ resume.personal.name }}
        </h1>
        <p class="text-gray-600 font-semibold text-sm">
          {{ resume.personal.title }}
        </p>

        <div class="flex flex-wrap items-center gap-3 text-xs text-gray-500 mt-1">
          <span>{{ resume.personal.email }}</span>
          <span>|</span>
          <span>{{ resume.personal.phone }}</span>
          <span>|</span>
          <span class="text-gray-600">{{ resume.personal.portfolio }}</span>
        </div>
      </div>
    </div>

    <!-- ABOUT -->
    <section class="mt-6">
      <h2 class="section-title">ABOUT ME</h2>
      <p class="mt-2 leading-relaxed text-xs" id="Aboutself">
        {{ resume.about }}
      </p>
    </section>

    <!-- SKILLS -->
    <section class="mt-6">
      <h2 class="section-title">SKILLS</h2>

      <div class="flex flex-wrap gap-2 mt-3">
        <span
          v-for="(skill, i) in resume.skills"
          :key="i"
          class="skill-badge text-xs italic font-medium"
        >
          {{ skill }}
        </span>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section class="mt-6">
      <h2 class="section-title">EXPERIENCE</h2>

      <div class="mt-4 space-y-4">
        <div
          v-for="(e, i) in resume.experience"
          :key="i"
          class="relative pl-5 border-l border-gray-200"
        >
          <!-- timeline dot -->
          <div v-if="e.role || e.company" class="absolute -left-[6px] top-1.5 w-2.5 h-2.5 bg-blue-600 rounded-full"></div>

          <div class="flex justify-between items-start">
            <div>
              <p class="font-semibold text-gray-800">
                {{ e.role }}
              </p>
              <p class="text-blue-600 text-xs">
                {{ e.company }}
              </p>
            </div>

            <span class="text-xs text-gray-400">
              {{ e.date }}
            </span>
          </div>

          <ul class="mt-2 text-xs list-disc ml-4 space-y-1 text-justify">
            <li v-for="(line, idx) in formatBullets(e.description)" :key="idx">
              {{ line }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="mt-6">
      <h2 class="section-title">PROJECTS</h2>

      <div class="mt-4 space-y-4">
        <div
          v-for="(p, i) in resume.project"
          :key="i"
          class="flex gap-3"
        >
          <!-- icon -->
          <div v-if="p.projectname" class="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop-minimal-icon lucide-laptop-minimal text-blue-500"><rect width="18" height="12" x="3" y="4" rx="2" ry="2"/><line x1="2" x2="22" y1="20" y2="20"/></svg>
          </div>

          <div class="flex-1">
            <div class="flex justify-between items-center">
              <p class="font-semibold text-gray-800">
                {{ p.projectname }}
              </p>

              <a
                :href="p.projectlink"
                target="_blank"
                class="text-xs text-blue-600"
              >
                {{ p.projectlink }}
              </a>
            </div>

            <p class="text-xs mt-1 text-gray-600 text-justify">
              {{ p.projectdescription }}
            </p>

            <div class="flex flex-wrap gap-2 mt-2">
              <span
                v-for="(tech, t) in p.projectstack"
                :key="t"
                class="tech-badge italic font-semibold"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section class="mt-6">
      <h2 class="section-title">EDUCATION</h2>

      <div
        v-for="(edu, i) in resume.education"
        :key="i"
        class="flex justify-between mt-3"
      >
        <div>
          <p class="font-semibold text-gray-800">
            {{ edu.school }}
            
          </p>
          <p class="text-gray-600 text-xs italic" >
            {{ edu.degree }}
            <span v-if="edu.field">-</span>
             {{ edu.field }}
             <span v-if="edu.duration">-</span> 
              {{ edu.duration }}
          </p>
        </div>

       
  
       
      </div>
    </section>
  </div>
</template>

<script setup>
import { useResume } from '~/composables/useResume'
import Projects from '~/pages/projects.vue'

const { resume } = useResume()

const formatBullets = (text) => {
  if (!text) return []
  return text.split('\n')
}

// const Value () => {
//   if(){

//   }
// }


</script>

<style scoped>
  .tech-badge{
    font-size: 10px;
  }
</style>