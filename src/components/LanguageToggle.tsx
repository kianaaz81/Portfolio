import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { useTranslation } from 'react-i18next'
import type { AppLanguage } from '../i18n'

export function LanguageToggle() {
  const { i18n } = useTranslation()
  const current = (i18n.language.startsWith('fa') ? 'fa' : 'en') as AppLanguage

  const setLang = (_: React.MouseEvent<HTMLElement>, lng: AppLanguage | null) => {
    if (!lng || lng === current) return
    void i18n.changeLanguage(lng)
  }

  return (
    <ToggleButtonGroup
      exclusive
      size="small"
      value={current}
      onChange={setLang}
      aria-label="Language"
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 999,
        p: 0.4,
        border: '1px solid',
        borderColor: 'divider',
        '& .MuiToggleButton-root': {
          border: 0,
          borderRadius: '999px !important',
          px: 1.5,
          py: 0.4,
          fontWeight: 600,
          color: 'text.secondary',
          '&.Mui-selected': {
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          },
        },
      }}
    >
      <ToggleButton value="en">EN</ToggleButton>
      <ToggleButton value="fa">FA</ToggleButton>
    </ToggleButtonGroup>
  )
}
