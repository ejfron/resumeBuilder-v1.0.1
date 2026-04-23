<template>
  <div class="flex flex-col h-screen overflow-hidden bg-white">
    <HeaderBar />

    <div class="flex flex-1 overflow-hidden border-t-2 border-b-2 border-gray-300">
      <!-- SidebarTabs with a ref so we can call its methods -->
      <SidebarTabs ref="sidebarTabsRef" />

      <!-- Main content wrapper -->
      <div class="flex flex-1 overflow-hidden min-h-0">
        
        <!-- Left column -->
        <div class="w-full lg:w-1/2 p-4 overflow-y-auto no-scrollbar min-h-0">
          <slot />
        </div>

        <!-- Right column (desktop preview) -->
        <div class="hidden lg:block w-full lg:w-1/2 p-4 overflow-y-auto no-scrollbar min-h-0 border-l-2 border-gray-200">
          <ResumePreview ref="desktopPreviewRef" />
        </div>

      </div>
    </div>

    <!-- Mobile Floating Preview Button -->
    <button
      v-if="!showMobilePreview"
      @click="showMobilePreview = true"
      class="block lg:hidden fixed bottom-5 right-5 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label="Open resume preview"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    </button>

    <!-- Mobile Bottom Sheet Modal -->
    <Teleport to="body">
      <div
        v-if="showMobilePreview"
        class="fixed inset-0 z-50 lg:hidden"
        @click.self="showMobilePreview = false"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black bg-opacity-50 transition-opacity"></div>
        
        <!-- Bottom sheet content -->
        <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl transform transition-transform max-h-[90vh] flex flex-col">
          <!-- Drag handle -->
          <div class="flex justify-center pt-2 pb-1">
            <div class="w-12 h-1.5 bg-gray-300 rounded-full"></div>
          </div>
          
          <!-- Header -->
          <div class="flex justify-between items-center px-4 py-2 border-b border-gray-200">
            <h3 class="text-lg font-medium text-gray-900">Resume Preview</h3>
            <button
              @click="showMobilePreview = false"
              class="text-gray-500 hover:text-gray-700 focus:outline-none p-1"
              aria-label="Close preview"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Preview content (scrollable) -->
          <div class="flex-1 overflow-y-auto p-4">
            <ResumePreview />
          </div>

          <!-- Action Buttons Footer (reuse SidebarTabs functions) -->
          <div class="flex gap-2 items-center justify-end px-6 py-4 border-t border-gray-200">
            <button
              @click="showMobilePreview = false"
              class="bg-gray-200 text-gray-700 flex items-center text-center content-center gap-1 px-4 py-2 rounded text-xs cursor-pointer font-medium"
            >
              <span class="flex items-center content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M13 16H8"/>
                  <path d="M14 8H8"/>
                  <path d="M16 12H8"/>
                  <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>
                </svg>
              </span>
              Edit Resume
            </button>
            <button
              @click="generatePdf"
              class="bg-blue-500 text-white px-4 py-2 rounded text-xs flex items-center gap-1 cursor-pointer font-medium"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 15V3" />
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="m7 10 5 5 5-5" />
                </svg>
              </span>
              Download resume
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarTabs from '@/components/SidebarTabs.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import ResumePreview from '@/components/ResumePreview.vue'

const showMobilePreview = ref(false)
const sidebarTabsRef = ref(null)

// Delegate PDF generation to the SidebarTabs component
const generatePdf = () => {
  if (sidebarTabsRef.value && typeof sidebarTabsRef.value.generatePdf === 'function') {
    sidebarTabsRef.value.generatePdf()
  } else {
    console.warn('SidebarTabs component not ready or missing generatePdf method')
  }
}
</script>