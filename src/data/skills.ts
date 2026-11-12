export const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'MUI',
  'Vite',
  'Next.js',
  'Tailwind CSS',
  'HTML',
  'CSS',
  'Git',
] as const

export type Skill = (typeof skills)[number]
