import { NavBar } from './components'
import { AppRouter } from './routes/AppRouter.jsx'
import { AppTheme } from './theme'

function App() {
  return (
    <AppTheme>
      <NavBar />
      <AppRouter />
    </AppTheme>
  )
}

export default App
