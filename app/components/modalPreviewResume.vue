<template>
  
  <!-- RESUME MODAL -->
<div
  v-if="isResumeModalOpen"
  class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
>
  <div class="bg-white w-[90%] max-w-3xl rounded-lg p-6 relative">

    <!-- CLOSE -->
    <button
      @click="closeResumeModal"
      class="absolute top-3 right-3 text-gray-500 hover:text-red-500"
    >
      ✕
    </button>

    <!-- HEADER -->
    <h2 class="text-lg font-bold text-blue-500 mb-4">
      Resume Preview
    </h2>

    <!-- CONTENT (preview area) -->
    <div class="border p-4 rounded bg-gray-50">
      <p class="text-gray-700">
        This is where your resume preview will go.
      </p>
    </div>

    <!-- ACTIONS -->
    <div class="flex justify-end gap-2 mt-5">
      <button
        @click="closeResumeModal"
        class="px-4 py-2 bg-gray-200 rounded"
      >
        Close
      </button>

      <button class="px-4 py-2 bg-blue-500 text-white rounded">
        Download
      </button>
    </div>

  </div>
</div>
</template>

<script>
const { resume } = useResume()
</script>

<style>

</style>