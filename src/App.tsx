import { NavBar } from './components'
import UserContextProvider from './context/UserContextProvider.js'
import { AppRouter } from './routes/AppRouter.jsx'
import { AppTheme } from './theme'

function App() {
  return (
    <UserContextProvider>
      <AppTheme>
        <NavBar />
        <AppRouter />
      </AppTheme>
    </UserContextProvider>
  )
}

export default App
