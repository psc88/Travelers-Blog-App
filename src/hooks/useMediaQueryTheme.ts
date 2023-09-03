import { Breakpoint, useMediaQuery, useTheme } from '@mui/material'

export const useMediaQueryTheme = (size: number | Breakpoint) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(size))

  return (
    isMatch
  )
}
