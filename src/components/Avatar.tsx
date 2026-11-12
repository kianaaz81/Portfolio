import { Avatar } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { profile } from '../data/links'

const PHOTO_SRC: string | null = null

export function ProfileAvatar({ size = 140 }: { size?: number }) {
  const theme = useTheme()

  return (
    <Avatar
      src={PHOTO_SRC ?? undefined}
      alt={profile.name}
      sx={{
        width: size,
        height: size,
        fontSize: size * 0.34,
        fontWeight: 800,
        bgcolor: 'transparent',
        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        boxShadow: `0 20px 50px ${theme.palette.mode === 'dark' ? 'rgba(59,130,246,0.28)' : 'rgba(29,78,216,0.28)'}`,
        border: '4px solid',
        borderColor: 'background.paper',
      }}
    >
      {profile.initials}
    </Avatar>
  )
}
