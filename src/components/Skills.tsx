import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { skills } from '../data/skills'
import { useReducedMotion } from '../hooks/useReducedMotion'

function MarqueeGroup({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="skills-marquee-group" aria-hidden={ariaHidden || undefined}>
      {skills.map((skill) => (
        <Box
          key={`${ariaHidden ? 'dup' : 'main'}-${skill}`}
          component="span"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            px: { xs: 2, sm: 2.5 },
            py: { xs: 1, sm: 1.15 },
            borderRadius: 999,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            fontWeight: 700,
            fontSize: { xs: '0.85rem', sm: '0.95rem' },
            whiteSpace: 'nowrap',
            boxShadow: 1,
          }}
        >
          {skill}
        </Box>
      ))}
    </div>
  )
}

export function Skills() {
  const { t } = useTranslation()
  const reduced = useReducedMotion()
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const groupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    const group = groupRef.current
    if (!viewport || !track || !group) return

    const sync = () => {
      // Exact width of one sequence — keeps the loop seamless (no blank gap)
      const shift = group.getBoundingClientRect().width
      track.style.setProperty('--marquee-shift', `${shift}px`)
    }

    sync()
    const ro = new ResizeObserver(sync)
    ro.observe(group)
    window.addEventListener('resize', sync)

    const lock = () => {
      if (viewport.scrollLeft !== 0) viewport.scrollLeft = 0
    }
    viewport.addEventListener('scroll', lock, { passive: true })

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', sync)
      viewport.removeEventListener('scroll', lock)
    }
  }, [])

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 7, sm: 10, md: 12 },
        scrollMarginTop: 96,
        overflowX: 'clip',
        maxWidth: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
          {t('skills.eyebrow')}
        </Typography>
        <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: '1.9rem', sm: '2.5rem' } }}>
          {t('skills.title')}
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1, mb: { xs: 3, sm: 4 }, maxWidth: 520 }}>
          {t('skills.subtitle')}
        </Typography>
      </Container>

      <Box
        ref={viewportRef}
        className="skills-marquee-viewport"
        sx={{
          py: { xs: 1.5, sm: 2 },
          mb: { xs: 3, sm: 4 },
          overflow: 'clip',
          maxWidth: '100%',
          touchAction: 'pan-y',
          overscrollBehaviorX: 'none',
        }}
      >
        <div
          ref={trackRef}
          className="skills-marquee-track"
          data-animate={reduced ? 'false' : 'true'}
        >
          <div ref={groupRef}>
            <MarqueeGroup />
          </div>
          <MarqueeGroup ariaHidden />
          <MarqueeGroup ariaHidden />
        </div>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 1.25, sm: 1.5 }}>
          {skills.map((skill) => (
            <Grid key={skill} size={{ xs: 6, sm: 4, md: 2 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 2.5 },
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  fontWeight: 700,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  borderRadius: 3,
                  transition: 'transform 0.2s ease, color 0.2s ease, border-color 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    color: 'primary.main',
                    borderColor: 'primary.light',
                  },
                }}
              >
                {skill}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
