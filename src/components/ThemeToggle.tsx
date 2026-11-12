import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
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
          <LightModeOutlinedIcon fontSize="small" />
        ) : (
          <DarkModeOutlinedIcon fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  )
}
