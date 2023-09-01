import { useMediaQuery, useTheme } from '@mui/material'

export const useMediaQueryTheme = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))

  return (
    isMatch
  )
}
