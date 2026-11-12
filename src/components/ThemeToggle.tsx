import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useThemeContext } from '../theme/ThemeProvider'

export function ThemeToggle() {
  const { t } = useTranslation()
  const { mode, toggleMode } = useThemeContext()
  const isDark = mode === 'dark'

  return (
    <Tooltip title={isDark ? t('nav.lightMode') : t('nav.darkMode')}>
      <IconButton
        onClick={toggleMode}
        aria-label={isDark ? t('nav.lightMode') : t('nav.darkMode')}
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
        }}
      >
        {isDark ? (
          <LightModeOutlined fontSize="small" />
        ) : (
          <DarkModeOutlined fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  )
}
