<template>
  <div class="w-56 bg-white py-6 px-4 h-full  hidden lg:block">
    <nav class="flex flex-col items-start justify-between h-screen relative pr-2.5 gap-3 border-r-2 border-r-gray-300 ">
      <div class="w-full"> 
          <NuxtLink
        v-for="item in links"
        :key="item.path"
        :to="item.path"
        class="flex items-center gap-3 px-2 py-3 rounded text-gray-700 hover:bg-blue-100 font-medium "
        active-class="text-blue-500 bg-gray-200 border-l-3 w-full border-blue-500"
      >
      
        <svg
          v-if="item.icon === 'user'"
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>

        <svg
          v-else-if="item.icon === 'code'"
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>

        <svg
          v-else-if="item.icon === 'BriefcaseBusiness'"
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 12h.01" />
          <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M22 13a18.15 18.15 0 0 1-20 0" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>

        <svg
          v-else-if="item.icon === 'folder'"
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
          <path d="M2 10h20" />
        </svg>

        <svg
          v-else-if="item.icon === 'graduation'"
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M22 10v6" />
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>

        <span  class="text-sm font-semibold">{{ item.name }}</span>
      </NuxtLink>
      </div>
    

      <div class="relative bottom-30 flex items-center content-center gap-2.5 flex-col">
           <div class="flex items-center justify-start gap-6 text-blue-500">
            <div class="bg-gray-200 rounded-full w-9 h-9 flex items-center  justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 100 100"><g clip-path="url(#a)"><path fill="#2b7fff" d="M56.1 83.7h37.2c1.2 0 2.3-.3 3.4-.9 1-.6 1.9-1.4 2.5-2.4s.9-2.2.9-3.3q0-1.8-.9-3.3l-25-42.9c-.6-1-1.4-1.9-2.5-2.4-1-.6-2.2-.9-3.4-.9s-2.3.3-3.4.9c-1 .6-1.9 1.4-2.5 2.4l-6.4 11-12.4-21.6c-.6-1-1.4-1.9-2.5-2.4-1-.6-2.2-.9-3.4-.9s-2.3.3-3.4.9c-1 .6-1.9 1.4-2.5 2.4L.9 73.7Q0 75.2 0 77t.9 3.3c.6 1 1.4 1.9 2.5 2.4 1 .6 2.2.9 3.4.9h23.3c9.2 0 16.1-4 20.8-11.9l11.4-19.6 6.1-10.5L86.7 73H62.2zM29.7 73.2H13.4l24.4-41.9 12.2 21-8.2 14c-3.1 5-6.6 6.9-12.1 6.9"/></g><defs><clipPath id="a"><path fill="#2b7fff" d="M0 0h100v100H0z"/></clipPath></defs></svg>
            </div>
            <div class="bg-gray-200 rounded-full w-9 h-9 flex items-center  justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 100 100"><g clip-path="url(#a)">
                    <path fill="#2b7fff" d="M0 0h100v100H0z"/><path fill="#fff" d="M48 37h4.8v8.3h-13v36.8l-.3.1c-.5.1-6.6.1-8 0l-1.1-.1V45.3h-13V37zm36.6 41.3c-1.9 2-4 3.1-7.4 4.1-1.5.4-1.7.4-5.1.4-3.3 0-3.6 0-5.2-.4-4.2-1.1-7.6-3.2-9.9-6.2-.7-.8-1.7-2.6-1.7-2.8 0-.1.2-.2.4-.3s.6-.4 1-.6c.3-.2 1-.6 1.4-.8s1.6-.9 2.7-1.6c1.1-.6 2-1.2 2.1-1.2s.3.2.5.5c.9 1.6 3.1 3.6 4.7 4.3 1 .4 3.1.9 4.1.9.9 0 2.7-.4 3.6-.8 1-.5 1.5-.9 2.1-1.8.4-.6.5-.8.4-2 0-1.1-.1-1.4-.4-2-.9-1.4-2.1-2.2-6.9-4.3-5-2.2-7.2-3.5-9-5.3-1.3-1.3-1.6-1.7-2.5-3.3-1.1-2.1-1.2-2.8-1.2-5.9 0-2.2 0-2.9.3-3.7.3-1.1 1.4-3.3 1.9-3.8 1-1.2 1.4-1.5 2.1-2.1 2.1-1.8 5.4-2.9 8.6-3 .4 0 1.5.1 2.7.1 3.2.3 5.4 1 7.5 2.7 1.6 1.2 4 4.2 3.7 4.6-.2.2-6.4 4.4-6.8 4.5-.2.1-.4 0-.8-.4-2.1-2.5-3-3.1-5-3.2-1.5-.1-2.2.1-3.2.7-1 .7-1.5 1.7-1.5 3.2 0 2.1.8 3.1 3.8 4.6 1.9 1 3.6 1.7 3.7 1.7.2 0 4.2 2 5.2 2.6 4.9 2.9 6.9 5.8 7.4 10.9.1 3.7-.9 7.2-3.3 9.7"/></g><defs><clipPath id="a"><path fill="#000" d="M0 0h100v100H0z"/></clipPath></defs></svg>
            </div>
            <div class="bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 100 100"><path fill="#2b7fff" d="M50 20c-13.3 0-21.7 6.7-25 20 5-6.7 10.8-9.2 17.5-7.5 3.8 1 6.5 3.7 9.5 6.8 4.9 5 10.6 10.7 23 10.7 13.3 0 21.7-6.7 25-20-5 6.7-10.8 9.2-17.5 7.5-3.8-1-6.5-3.7-9.5-6.8C68.1 25.8 62.4 20 50 20M25 50C11.7 50 3.3 56.7 0 70c5-6.7 10.8-9.2 17.5-7.5 3.8 1 6.5 3.7 9.5 6.8 4.9 5 10.6 10.7 23 10.7 13.3 0 21.7-6.7 25-20-5 6.7-10.8 9.2-17.5 7.5-3.8-.9-6.5-3.7-9.5-6.8C43.1 55.8 37.4 50 25 50"/></svg>
            </div>
        </div>
        <div class="flex gap-2 flex-col items-center content-center">
            <button @click="openResumeModal" class="bg-blue-500 text-white w-full flex items-center text-center content-center gap-1 px-4 py-2 rounded text-xs cursor-pointer font-medium">
            <span class="flex items-center content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt-text-icon lucide-receipt-text"><path d="M13 16H8"/><path d="M14 8H8"/><path d="M16 12H8"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/></svg>
            </span>
            Generate Resume
          </button>
          <button @click="generatePdf" class="bg-gray-200 text-gray-700 px-4 py-2 rounded text-xs flex items-center gap-1 cursor-pointer font-medium">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
            </span>
            Download resume
          </button>
          <div class="text-xs text-blue-500 font-bold">
            <!-- Developed by 
            Edgar Jugado -->
          </div>
        </div>
      </div>
    </nav>


    <!-- RESUME MODAL -->
    <div
      v-if="isResumeModalOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <div
        class="bg-white w-[90%] max-w-3xl rounded-lg relative flex flex-col max-h-[90vh]"
      >

        <!-- CLOSE -->
        <button
          @click="closeResumeModal"
          class="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-red-500 z-10"
        >
          ✕
        </button>

        <!-- HEADER (fixed) -->
        <div class="p-6 pb-3 border-b">
          <h2 class="text-lg font-bold text-blue-500">
            Resume Preview
          </h2>
        </div>

        <!-- SCROLLABLE CONTENT -->
        <div ref="resumeRef" class="flex-1 overflow-y-auto p-6 bg-gray-50">
          <ResumePreview />
        </div>
      <div class="flex gap-2 items-center justify-end px-6 py-4 content-end">
            <button @click="closeResumeModal" class="bg-gray-200 text-gray-700 flex items-center text-center content-center gap-1 px-4 py-2 rounded text-xs cursor-pointer font-medium">
            <span class="flex items-center content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt-text-icon lucide-receipt-text"><path d="M13 16H8"/><path d="M14 8H8"/><path d="M16 12H8"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/></svg>
            </span>
            Edit Resume
          </button>
          <button @click="generatePdf"  class="bg-blue-500  text-white px-4 py-2 rounded text-xs flex items-center gap-1 cursor-pointer font-medium">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useResume } from '~/composables/useResume'

const { resume } = useResume()
const isResumeModalOpen = ref(false)
const resumeRef = ref(null)

const links = [
  { name: 'Personal', path: '/personal', icon: 'user' },
  { name: 'Skills', path: '/skills', icon: 'code' },
  { name: 'Experience', path: '/experience', icon: 'BriefcaseBusiness' },
  { name: 'Projects', path: '/projects', icon: 'folder' },
  { name: 'Education', path: '/education', icon: 'graduation' },
  { name: 'About', path: '/about', icon: 'user' },
]

const openResumeModal = () => {
  isResumeModalOpen.value = true
}

const closeResumeModal = () => {
  isResumeModalOpen.value = false
}

const generatePdf = async () => {
  const resumeData = resume.value
  if (!resumeData) {
    console.error('Resume data not available')
    return
  }

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => resolve()
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
      document.head.appendChild(script)
    })
  }

  try {
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js')
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js')

    if (!window.pdfMake) throw new Error('pdfMake not loaded')
    const pdfMake = window.pdfMake

    const { personal, about, skills, experience, project, education } = resumeData

    const separatorLine = (mt = 2, mb = 2) => ({
      canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 6, color: '#000' }],
      margin: [0, mt, 0, mb]
    })

    // 🔥 EXPERIENCE TIMELINE
    const timelineExperience = experience.map((exp, index) => {
      const isLast = index === experience.length - 1

      return {
        columns: [
          {
            width: 20,
            stack: [
              {
                canvas: [
                  {
                    type: 'ellipse',
                    x: 5,
                    y: 5,
                    r1: 3,
                    r2: 3,
                    color: '#2563eb'
                  }
                ],
                margin: [0, 2, 0, 0]
              },
              ...(!isLast ? [{
                canvas: [
                  {
                    type: 'line',
                    x1: 5,
                    y1: 0,
                    x2: 5,
                    y2: 55,
                    lineWidth: 1,
                    color: '#d1d5db'
                  }
                ]
              }] : [])
            ]
          },

          {
            width: '*',
            stack: [
              {
                columns: [
                  {
                    stack: [
                      { text: exp.role || '', style: 'jobTitle' },
                      { text: exp.company || '', style: 'company' }
                    ]
                  },
                  {
                    text: exp.date || '',
                    alignment: 'right',
                    style: 'date'
                  }
                ],
                margin: [0, 2, 0, 2]
              },

              {
                text: exp.description || '',
                style: 'text',
                margin: [0, 2, 0, 0]
              }
            ]
          }
        ],
        margin: [0, 4, 0, 10]
      }
    })

    // 🔥 PROJECTS TIMELINE (UPDATED)
    const timelineProjects = project.map((p, index) => {
      const isLast = index === project.length - 1

      return {
        columns: [
          // LEFT BULLET + LINE
          {
            width: 20,
            stack: [
              {
                canvas: [
                  {
                    type: 'ellipse',
                    x: 5,
                    y: 5,
                    r1: 3,
                    r2: 3,
                    color: '#2563eb'
                  }
                ],
                margin: [0, 2, 0, 0]
              },
              ...(!isLast ? [{
                canvas: [
                  {
                    type: 'line',
                    x1: 5,
                    y1: 0,
                    x2: 5,
                    y2: 55,
                    lineWidth: 1,
                    color: '#d1d5db'
                  }
                ]
              }] : [])
            ]
          },

          // RIGHT CONTENT
          {
            width: '*',
            stack: [
              {
                columns: [
                  {
                    text: p.projectname || '',
                    style: 'projectTitle'
                  },
                  {
                    text: p.projectlink || '',
                    alignment: 'right',
                    style: 'link'
                  }
                ]
              },

              // ✅ NO BULLETS — CLEAN TEXT ONLY
              {
                text: p.projectdescription || '',
                style: 'text',
                margin: [0, 2, 0, 2]
              },

              {
                text: (p.projectstack || []).join('  '),
                style: 'techStack'
              }
            ]
          }
        ],
        margin: [0, 4, 0, 10]
      }
    })

    const docDefinition = {
      content: [
        {
          stack: [
            { text: personal.name, style: 'header' },
            { text: personal.title, style: 'subheader' },
            { text: `${personal.email} | ${personal.phone} | ${personal.portfolio}`, style: 'contact' },
            separatorLine(5, 8)
          ]
        },

        { text: 'ABOUT ME', style: 'section' },
        { text: about || '', style: 'aboutText', margin: [0, 2, 0, 5] },
        separatorLine(2, 5),

        { text: 'SKILLS', style: 'section' },
        { text: skills.join(',  '), style: 'skillsText', margin: [0, 2, 0, 5] },
        separatorLine(2, 5),

        { text: 'EXPERIENCE', style: 'section' },
        ...timelineExperience,
        separatorLine(2, 5),

        { text: 'PROJECTS', style: 'section' },
        ...timelineProjects,
        separatorLine(2, 5),

        { text: 'EDUCATION', style: 'section' },
        ...education.map(edu => ({
          stack: [
            { text: edu.school || '', style: 'school' },
            { text: [edu.degree, edu.field, edu.duration].filter(Boolean).join(' - '), style: 'educationDetail' }
          ],
          margin: [0, 2, 0, 5]
        })),

        separatorLine(2, 2)
      ],

      defaultStyle: {
        fontSize: 9,
        color: '#374151',
        lineHeight: 1.3
      },

      styles: {
        header: { fontSize: 20, bold: true, color: '#1f2937', margin: [0, 0, 0, 2] },
        subheader: { fontSize: 10, bold: true, color: '#4b5563', margin: [0, 1, 0, 1] },
        contact: { fontSize: 8, color: '#6b7280' },
        section: { fontSize: 10, bold: true, color: '#000000', margin: [0, 4, 0, 2] },
        aboutText: { fontSize: 8, lineHeight: 1.3 },
        skillsText: { fontSize: 8, italics: true },
        jobTitle: { fontSize: 10, bold: true, color: '#1f2937' },
        company: { fontSize: 8, color: '#2563eb' },
        date: { fontSize: 7, color: '#9ca3af' },
        text: { fontSize: 8, lineHeight: 1.3 },
        projectTitle: { fontSize: 10, bold: true, color: '#1f2937' },
        link: { fontSize: 7, color: '#2563eb' },
        techStack: { fontSize: 7, italics: true, color: '#4b5563' },
        school: { fontSize: 10, bold: true, color: '#1f2937' },
        educationDetail: { fontSize: 8, italics: true, color: '#4b5563' }
      }
    }

    pdfMake.createPdf(docDefinition).download(`${personal.name}.pdf`)
  } catch (err) {
    console.error('PDF generation failed:', err)
    alert('Failed to load PDF library.')
  }
}

defineExpose({ generatePdf })
</script>



<style scoped>
/* Force active link styling */
a.exact-active-link,
a.router-link-exact-active,
a.nuxt-link-exact-active {
  color: #3b82f6 !important; /* Tailwind blue-500 */
}

a.exact-active-link svg,
a.router-link-exact-active svg,
a.nuxt-link-exact-active svg {
  stroke: #3b82f6 !important;
}
</style>