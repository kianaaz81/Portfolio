import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'

export function Projects() {
  const { t } = useTranslation()

  return (
    <Box id="projects" component="section" sx={{ py: { xs: 8, sm: 12 }, scrollMarginTop: 96 }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
          {t('projects.eyebrow')}
        </Typography>
        <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: '2rem', sm: '2.6rem' } }}>
          {t('projects.title')}
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1, mb: 4 }}>
          {t('projects.subtitle')}
        </Typography>

        <Stack spacing={3}>
          {projects.map((project) => {
            const bullets = t(`projects.${project.id}.bullets`, {
              returnObjects: true,
            }) as string[]

            return (
              <Paper
                key={project.id}
                elevation={0}
                sx={{
                  p: { xs: 2.5, sm: 4 },
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                }}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  spacing={1}
                >
                  <Box>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
                      {project.company}
                    </Typography>
                    <Typography variant="h3" sx={{ fontSize: { xs: '1.6rem', sm: '2rem' } }}>
                      {t(`projects.${project.id}.name`)}
                    </Typography>
                  </Box>
                  <Chip label={t(`projects.${project.id}.role`)} color="primary" variant="outlined" />
                </Stack>

                <Typography color="text.secondary" sx={{ mt: 2 }}>
                  {t(`projects.${project.id}.summary`)}
                </Typography>

                <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mt: 3 }}>
                  {t('projects.highlights')}
                </Typography>
                <Grid container spacing={1.5} sx={{ mt: 0.5 }}>
                  {Array.isArray(bullets) &&
                    bullets.map((item) => (
                      <Grid key={item} size={{ xs: 12, sm: 6 }}>
                        <Paper
                          variant="outlined"
                          sx={{ p: 1.75, height: '100%', bgcolor: 'action.hover', borderColor: 'divider' }}
                        >
                          <Typography variant="body2" color="text.secondary">
                            {item}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                </Grid>

                <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mt: 3 }}>
                  {t('projects.tech')}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
                  {project.tech.map((tech) => (
                    <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" />
                  ))}
                </Stack>
              </Paper>
            )
          })}
        </Stack>
      </Container>
    </Box>
  )
}
