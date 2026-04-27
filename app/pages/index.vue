<script setup>
import About from '~/pages/about.vue'
import Experience from '~/pages/experience.vue'
import Personal from '~/pages/personal.vue'
import Education from '~/pages/education.vue'
import Skills from '~/pages/skills.vue'
import Projects from '~/pages/projects.vue'


// 'default' layout is automatically used – this line is optional
definePageMeta({
  layout: 'default'
})


useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/images/49f57e30-f4b5-469d-a453-398b30982f16.png'
    }
  ]
})
</script>

<template>
  <div class="h-dvh ">
    <!-- <h2 class="text-xl font-bold mb-4 text-gray-700">Create Your Resume</h2>
    <p class="text-gray-600">Start editing your resume details here.</p> -->
    <!-- Your form or resume editor components will go here -->

    <div>
      <Personal />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      
      
    </div>
  </div>
</template>

<style scoped>
/* Add your page‑specific styles if needed */
</style>