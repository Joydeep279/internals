import {
  Navigation,
  Header,
  Stats,
  DeepDives,
  Architecture,
  Newsletter,
  Footer,
} from './components'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-background-start bg-gradient-to-b dark:from-background-start dark:to-background-end min-h-screen text-slate-900 dark:text-slate-200 antialiased overflow-x-hidden selection:bg-primary selection:text-white transition-colors">
        <Navigation />
        <Header />
        <Stats />
        <DeepDives />
        <Architecture />
        <Newsletter />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
