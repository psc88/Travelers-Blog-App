import { useMediaQuery, useTheme } from '@mui/material'

export const useMediaQueryTheme = (size: string) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(size))

  return (
    isMatch
  )
}
