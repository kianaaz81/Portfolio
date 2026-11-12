import { CloseRounded, MenuRounded } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { socialLinks } from '../data/links'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'

const sectionIds = ['about', 'projects', 'skills'] as const

export function Nav() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduced = useReducedMotion()
  const isFa = i18n.language.startsWith('fa')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 900px)').matches) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <AppBar
        position="sticky"
        elevation={scrolled || open ? 2 : 0}
        color="transparent"
        sx={{
          zIndex: (theme) => theme.zIndex.appBar,
          left: 0,
          right: 0,
          width: '100%',
          maxWidth: '100%',
          overflow: 'hidden',
          backdropFilter: scrolled || open ? 'blur(14px)' : 'none',
          bgcolor: scrolled || open ? 'background.paper' : 'transparent',
          borderBottom: '1px solid',
          borderColor: scrolled || open ? 'divider' : 'transparent',
          transition: 'background-color 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 56, sm: 64 },
              justifyContent: 'space-between',
              gap: 1.5,
            }}
          >
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{ display: { xs: 'none', md: 'flex' }, flexWrap: 'wrap' }}
            >
              {sectionIds.map((id) => (
                <Button
                  key={id}
                  href={`#${id}`}
                  color="inherit"
                  sx={{ color: 'text.secondary', px: { md: 1.25, lg: 1.75 } }}
                >
                  {t(`nav.${id}`)}
                </Button>
              ))}
              <Button
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                color="inherit"
                sx={{ color: 'text.secondary' }}
              >
                GitHub
              </Button>
              <Button
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                color="inherit"
                sx={{ color: 'text.secondary' }}
              >
                LinkedIn
              </Button>
              <ThemeToggle />
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <ThemeToggle />
              <IconButton
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
                aria-expanded={open}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                }}
              >
                {open ? <CloseRounded /> : <MenuRounded />}
              </IconButton>
            </Stack>

            <LanguageToggle />
          </Toolbar>
        </Container>
      </AppBar>

      <AnimatePresence>
        {open && (
          <Box
            component={motion.div}
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t('nav.menu')}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22 }}
            sx={{
              position: 'fixed',
              inset: 0,
              zIndex: 1300,
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
              bgcolor: 'background.default',
              pt: 'env(safe-area-inset-top)',
              pb: 'env(safe-area-inset-bottom)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 2,
                py: 1.5,
                borderBottom: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
              }}
            >
              <LanguageToggle />
              <Stack direction="row" spacing={1}>
                <ThemeToggle />
                <IconButton
                  onClick={close}
                  aria-label={t('nav.closeMenu')}
                  sx={{ border: '1px solid', borderColor: 'divider' }}
                >
                  <CloseRounded />
                </IconButton>
              </Stack>
            </Box>

            <Box
              component={motion.div}
              initial={reduced ? false : { y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                px: 2.5,
                py: 3,
                overflowY: 'auto',
              }}
            >
              <Stack spacing={1.25} sx={{ flex: 1 }}>
                {sectionIds.map((id, index) => (
                  <Box
                    key={id}
                    component={motion.a}
                    href={`#${id}`}
                    onClick={close}
                    initial={reduced ? false : { opacity: 0, x: isFa ? 16 : -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.28 }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      minHeight: 56,
                      px: 2,
                      borderRadius: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      bgcolor: 'background.paper',
                      color: 'text.primary',
                      fontWeight: 700,
                      fontSize: { xs: '1.15rem', sm: '1.25rem' },
                      textDecoration: 'none',
                      boxShadow: 1,
                      '&:active': { transform: 'scale(0.98)' },
                    }}
                  >
                    {t(`nav.${id}`)}
                  </Box>
                ))}
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} sx={{ mt: 3 }}>
                <Button
                  fullWidth
                  size="large"
                  variant="outlined"
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={close}
                >
                  GitHub
                </Button>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={close}
                >
                  LinkedIn
                </Button>
              </Stack>
            </Box>
          </Box>
        )}
      </AnimatePresence>
    </>
  )
}
