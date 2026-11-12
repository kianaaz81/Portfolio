import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion, type Transition } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { profile, socialLinks } from '../data/links'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { ProfileAvatar } from './Avatar'

const easeOut: Transition['ease'] = [0.22, 1, 0.36, 1]

const orbitChips = [
  { label: 'React', angle: -20 },
  { label: 'TypeScript', angle: 52 },
  { label: 'MUI', angle: 125 },
  { label: 'Vite', angle: 198 },
  { label: 'Next.js', angle: 268 },
] as const

const rings = [
  { inset: { xs: 8, sm: 12, lg: 14 }, border: '1px solid', opacity: 0.35, dashed: false },
  { inset: { xs: 28, sm: 36, lg: 40 }, border: '1px dashed', opacity: 0.55, dashed: true },
  { inset: { xs: 52, sm: 64, lg: 72 }, border: '1px solid', opacity: 0.7, dashed: false },
] as const

export function Hero() {
  const { t } = useTranslation()
  const reduced = useReducedMotion()

  const stats = [
    { value: t('hero.statYears'), label: t('hero.statYearsLabel') },
    { value: t('hero.statProjects'), label: t('hero.statProjectsLabel') },
    { value: t('hero.statLang'), label: t('hero.statLangLabel') },
  ]

  const fadeUp = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: easeOut },
        }

  return (
    <Box
      id="top"
      component="section"
      sx={{
        minHeight: { xs: 'auto', md: 'min(88svh, 820px)' },
        display: 'flex',
        alignItems: 'center',
        py: { xs: 5, sm: 8, md: 10 },
        overflow: 'visible',
        maxWidth: '100%',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, sm: 5, lg: 8 }} alignItems="center">
          <Grid size={{ xs: 12, lg: 7 }}>
            <motion.div {...fadeUp(0)}>
              <Chip
                label={t('hero.role')}
                color="primary"
                variant="outlined"
                sx={{ mb: 2, fontWeight: 700 }}
              />
            </motion.div>

            <motion.div {...fadeUp(0.08)}>
              <Typography
                variant="h1"
                sx={{ fontSize: { xs: '2.35rem', sm: '3.4rem', md: '4.35rem' } }}
              >
                <Box component="span" sx={{ display: 'block', color: 'text.primary' }}>
                  {profile.name.split(' ')[0]}
                </Box>
                <Box
                  component="span"
                  sx={{
                    background: (theme) =>
                      `linear-gradient(115deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {profile.name.split(' ').slice(1).join(' ')}
                </Box>
              </Typography>
            </motion.div>

            <motion.div {...fadeUp(0.16)}>
              <Typography
                color="text.secondary"
                sx={{ mt: 2.5, maxWidth: 560, fontSize: { xs: '0.98rem', sm: '1.15rem' } }}
              >
                {t('hero.tagline')}
              </Typography>
            </motion.div>

            <motion.div {...fadeUp(0.24)}>
              <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap" sx={{ mt: 3.5 }}>
                <Button variant="contained" href="#projects" size="large">
                  {t('hero.ctaProjects')}
                </Button>
                <Button
                  variant="outlined"
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  size="large"
                >
                  {t('hero.ctaContact')}
                </Button>
              </Stack>
            </motion.div>

            <motion.div {...fadeUp(0.32)}>
              <Grid container spacing={1.5} sx={{ mt: 4, maxWidth: 520 }}>
                {stats.map((stat) => (
                  <Grid key={stat.label} size={4}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 1.25, sm: 2 },
                        textAlign: 'center',
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                      }}
                    >
                      <Typography variant="h5" color="primary" sx={{ fontSize: { xs: '1.15rem', sm: '1.5rem' } }}>
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                          display: 'block',
                          mt: 0.25,
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          fontSize: { xs: '0.62rem', sm: '0.72rem' },
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.18, ease: easeOut }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  maxWidth: '100%',
                  py: { xs: 1, sm: 2 },
                  // Section locks X-scroll; this stage must NOT clip the orbit
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: 'min(280px, 82vw)', sm: 320, lg: 360 },
                    height: { xs: 'min(280px, 82vw)', sm: 320, lg: 360 },
                    maxWidth: '100%',
                    display: 'grid',
                    placeItems: 'center',
                    // No overflow/mask — chips stay fully visible for the whole spin
                    overflow: 'visible',
                  }}
                >
                  {rings.map((ring, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: 'absolute',
                        inset: {
                          xs: [22, 42, 64][index],
                          sm: ring.inset.sm,
                          lg: ring.inset.lg,
                        },
                        borderRadius: '50%',
                        border: ring.border,
                        borderStyle: ring.dashed ? 'dashed' : 'solid',
                        borderColor: index === 1 ? 'primary.light' : 'divider',
                        opacity: ring.opacity,
                        zIndex: 0,
                        pointerEvents: 'none',
                      }}
                    />
                  ))}

                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      zIndex: 2,
                      overflow: 'visible',
                    }}
                  >
                    <motion.div
                      animate={reduced ? undefined : { rotate: 360 }}
                      transition={
                        reduced ? undefined : { duration: 36, repeat: Infinity, ease: 'linear' }
                      }
                      style={{ position: 'absolute', inset: 0 }}
                    >
                      {orbitChips.map((chip) => (
                        <Box
                          key={chip.label}
                          sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: {
                              xs: `rotate(${chip.angle}deg) translateX(100px) rotate(${-chip.angle}deg)`,
                              sm: `rotate(${chip.angle}deg) translateX(122px) rotate(${-chip.angle}deg)`,
                              lg: `rotate(${chip.angle}deg) translateX(142px) rotate(${-chip.angle}deg)`,
                            },
                            zIndex: 2,
                          }}
                        >
                          <motion.div
                            animate={reduced ? undefined : { rotate: -360 }}
                            transition={
                              reduced
                                ? undefined
                                : { duration: 36, repeat: Infinity, ease: 'linear' }
                            }
                          >
                            <Chip
                              label={chip.label}
                              size="small"
                              color="primary"
                              variant="outlined"
                              sx={{
                                fontWeight: 700,
                                bgcolor: 'background.paper',
                                boxShadow: 3,
                                borderColor: 'divider',
                                height: { xs: 26, sm: 28 },
                                fontSize: { xs: '0.7rem', sm: '0.78rem' },
                                position: 'relative',
                                zIndex: 2,
                                '& .MuiChip-label': {
                                  px: { xs: 1, sm: 1.2 },
                                },
                              }}
                            />
                          </motion.div>
                        </Box>
                      ))}
                    </motion.div>
                  </Box>

                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <ProfileAvatar size={120} />
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
