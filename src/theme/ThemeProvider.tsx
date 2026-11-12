import { CssBaseline } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useTranslation } from 'react-i18next'
import { createAppTheme, type ThemeMode } from './theme'

type ThemeContextValue = {
  mode: ThemeMode
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getPreferredMode(): ThemeMode {
  const saved = localStorage.getItem('portfolio-theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation()
  const [mode, setMode] = useState<ThemeMode>(() => getPreferredMode())
  const direction = i18n.language.startsWith('fa') ? 'rtl' : 'ltr'

  useEffect(() => {
    localStorage.setItem('portfolio-theme', mode)
    document.documentElement.dataset.theme = mode
  }, [mode])

  useEffect(() => {
    document.documentElement.lang = i18n.language.startsWith('fa') ? 'fa' : 'en'
    document.documentElement.dir = direction
  }, [direction, i18n.language])

  const theme = useMemo(
    () => createAppTheme(mode, direction),
    [mode, direction],
  )

  const value = useMemo(
    () => ({
      mode,
      toggleMode: () =>
        setMode((current) => (current === 'light' ? 'dark' : 'light')),
    }),
    [mode],
  )

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useThemeContext must be used within ThemeProvider')
  }
  return ctx
}
