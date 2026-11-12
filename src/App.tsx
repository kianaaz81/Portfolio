import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import { About } from './components/About'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { useReducedMotion } from './hooks/useReducedMotion'

export default function App() {
  const reduced = useReducedMotion()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        maxWidth: '100%',
        overflowX: 'hidden',
      }}
    >
      <Nav />
      <Box
        component={motion.main}
        id="main"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        sx={{ maxWidth: '100%', overflowX: 'hidden' }}
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
      </Box>
    </Box>
  )
}
