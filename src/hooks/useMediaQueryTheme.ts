import { Breakpoint, useMediaQuery, useTheme } from '@mui/material'

/**
 * Customize a theme for a specific media query configuration
 * @param size 
 * @returns {boolean}
 */

export const useMediaQueryTheme = (size: number | Breakpoint) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(size))

  return (
    isMatch
  )
}
