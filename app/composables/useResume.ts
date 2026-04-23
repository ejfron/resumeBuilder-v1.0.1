export const useResume = () => {
  const resume = useState('resume', () => ({
    personal: {
      name: 'John Doe',
      title: 'Full Stack Developer',
      email: 'john@example.com',
      phone: '+63 900 000 0000',
      portfolio: 'https://john.dev'
    },
    skills: [],
    experience: [
      {
        company: '',
        role: '', 
        date: '', 
        description: ''
      }
    ],
    project: [
        {
          projectname: '',
          projectlink: '',
          projectdescription: '',
          projectstack: [
            
          ]
        }
    ],
    education: [],
    about: ''
  }))

  return { resume }
}