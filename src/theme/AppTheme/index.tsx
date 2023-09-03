import { FC } from 'react'
import { ThemeProvider } from "@mui/material"
import { colorTheme } from ".."

interface IAppThemeProps {
  children: React.ReactNode;
}

export const AppTheme: FC<IAppThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={ colorTheme }>
      { children }
    </ThemeProvider>
  )
}
