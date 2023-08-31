import MainLayout from "./components/Home/MainLayout"
import Profile from "./components/Profile/Profile"
import Contact from "./components/Contact/Contact"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { createContext } from "react"

export const ThemeContext = createContext()

function App() {
    const transVari = {
      visible: {
          y: 0,
          opacity: 1,
          transition: {
            type: 'tween',
            // type: 'spring',
            // stiffness: 300,
            // damping: 30,
            when: 'beforeChildren',
            // duration: 0.15,
            // dalay: 0.05,
            staggerChildren: 0.1,
          }
      },
      hidden: {
          y: '20vh',
          opacity: 0,
      },
    }
    const miniTransVari = {
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          // type: 'spring',
          // stiffness: 120,
        }
      },
      hidden: {
        y: '15vh',
        opacity: 0,
      }
    }

  return (
    <Router>
          <Navigation /> 
          <ThemeContext.Provider value={{transVari, miniTransVari}}>
            <Routes>
                <Route exact path="*" element={ <MainLayout /> }/>
                <Route exact path="/" element={ <MainLayout /> }/>
                <Route exact path="/Profile" element={ <Profile /> }/>
                <Route exact path="/Contact" element={ <Contact /> }/>
            </Routes>
          </ThemeContext.Provider>
          <Footer />
    </Router>
  )
}

export default App