import { ThemeProvider } from "@mui/material"
import { colorTheme } from ".."


export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ colorTheme }>
      { children }
    </ThemeProvider>
  )
}
