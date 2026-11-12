import { createTheme, type Direction } from '@mui/material/styles'

export type ThemeMode = 'light' | 'dark'

export function createAppTheme(mode: ThemeMode, direction: Direction) {
  const isDark = mode === 'dark'
  const isRtl = direction === 'rtl'
  const bodyFont = isRtl
    ? '"Vazirmatn", "Manrope", system-ui, sans-serif'
    : '"Manrope", "Vazirmatn", system-ui, sans-serif'
  const displayFont = isRtl
    ? '"Vazirmatn", "Outfit", sans-serif'
    : '"Outfit", "Manrope", sans-serif'

  return createTheme({
    direction,
    palette: {
      mode,
      primary: {
        main: isDark ? '#60a5fa' : '#1d4ed8',
        light: isDark ? '#93c5fd' : '#3b82f6',
        dark: isDark ? '#3b82f6' : '#1e40af',
        contrastText: '#ffffff',
      },
      secondary: {
        main: isDark ? '#fb923c' : '#ea580c',
        light: isDark ? '#fdba74' : '#fb923c',
        dark: isDark ? '#ea580c' : '#c2410c',
      },
      background: {
        default: isDark ? '#0b0e14' : '#eef1f6',
        paper: isDark ? '#151a24' : '#ffffff',
      },
      text: {
        primary: isDark ? '#eef2f7' : '#141821',
        secondary: isDark ? '#c2cad8' : '#3b4455',
      },
      divider: isDark ? '#2a3344' : '#c9d0dc',
    },
    typography: {
      fontFamily: bodyFont,
      fontSize: 15,
      h1: {
        fontFamily: displayFont,
        fontWeight: 800,
        letterSpacing: isRtl ? 0 : '-0.035em',
        lineHeight: 1.05,
      },
      h2: {
        fontFamily: displayFont,
        fontWeight: 700,
        letterSpacing: isRtl ? 0 : '-0.03em',
        lineHeight: 1.15,
      },
      h3: {
        fontFamily: displayFont,
        fontWeight: 700,
        letterSpacing: isRtl ? 0 : '-0.02em',
      },
      h5: {
        fontFamily: displayFont,
        fontWeight: 700,
      },
      body1: {
        fontFamily: bodyFont,
        lineHeight: 1.7,
        letterSpacing: isRtl ? 0 : '0.01em',
      },
      body2: {
        fontFamily: bodyFont,
        lineHeight: 1.65,
      },
      button: {
        fontFamily: bodyFont,
        textTransform: 'none',
        fontWeight: 600,
        letterSpacing: isRtl ? 0 : '0.01em',
      },
      caption: {
        fontFamily: bodyFont,
        letterSpacing: isRtl ? 0 : '0.04em',
      },
      overline: {
        fontFamily: bodyFont,
        fontWeight: 700,
        letterSpacing: isRtl ? '0.04em' : '0.12em',
      },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollbarWidth: 'thin',
            scrollbarColor: isDark
              ? '#3b4960 transparent'
              : '#94a3b8 transparent',
          },
          body: {
            fontFamily: bodyFont,
            backgroundImage: isDark
              ? 'radial-gradient(ellipse at 10% -10%, rgba(96,165,250,0.18), transparent 50%), radial-gradient(ellipse at 90% 10%, rgba(251,146,60,0.12), transparent 45%)'
              : 'radial-gradient(ellipse at 10% -10%, rgba(59,130,246,0.2), transparent 50%), radial-gradient(ellipse at 90% 10%, rgba(234,88,12,0.12), transparent 45%)',
            backgroundAttachment: 'fixed',
            transition: 'background-color 0.45s ease, color 0.45s ease',
          },
          '::-webkit-scrollbar': {
            width: 11,
            height: 11,
          },
          '::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '::-webkit-scrollbar-thumb': {
            borderRadius: 999,
            background: isDark ? '#3b4960' : '#94a3b8',
            border: '3px solid transparent',
            backgroundClip: 'padding-box',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: isDark ? '#52627c' : '#64748b',
            border: '3px solid transparent',
            backgroundClip: 'padding-box',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            paddingInline: 22,
            paddingBlock: 10,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontFamily: bodyFont,
            fontWeight: 600,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  })
}
