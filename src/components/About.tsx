import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()
  const points = t('about.points', { returnObjects: true }) as string[]

  return (
    <Box id="about" component="section" sx={{ py: { xs: 8, sm: 12 }, scrollMarginTop: 96 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
              {t('about.eyebrow')}
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: '2rem', sm: '2.6rem' } }}>
              {t('about.title')}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography color="text.secondary" sx={{ fontSize: { xs: '1rem', sm: '1.15rem' }, mb: 2 }}>
              {t('about.p1')}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              {t('about.p2')}
            </Typography>
            <Grid container spacing={1.5}>
              {Array.isArray(points) &&
                points.map((point, index) => (
                  <Grid key={point} size={{ xs: 12, sm: 6 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        height: '100%',
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                      }}
                    >
                      <Typography variant="caption" color="primary" sx={{ fontWeight: 800 }}>
                        0{index + 1}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
                        {point}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
