export type ProjectId = 'sana' | 'enterpriseAi'

export interface Project {
  id: ProjectId
  company: 'Nadin Sadr Aria'
  tech: string[]
}

export const projects: Project[] = [
  {
    id: 'sana',
    company: 'Nadin Sadr Aria',
    tech: ['React', 'TypeScript', 'MUI', 'Vite'],
  },
  {
    id: 'enterpriseAi',
    company: 'Nadin Sadr Aria',
    tech: ['React', 'TypeScript', 'Next.js', 'MUI'],
  },
]
