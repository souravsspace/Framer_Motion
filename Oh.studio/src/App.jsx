import MainLayout from "./components/Home/MainLayout"
import Profile from "./components/Profile/Profile"
import Contact from "./components/Contact/Contact"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { createContext } from "react"

export const ThemeContext = createContext()

function App() {
    const init={ y: 0, opacity: 0 }
    const anim={ y: -25, opacity: 1 }
    const trans={ duration: 0.5 }
  return (
    <Router>
          <Navigation /> 
          <ThemeContext.Provider value={{init, anim, trans}}>
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