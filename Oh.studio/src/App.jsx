import MainLayout from "./components/Home/MainLayout"
import Profile from "./components/Profile/Profile"
import Contact from "./components/Contact/Contact"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <Navigation /> 
      <Routes>
          <Route exact path="*" element={ <MainLayout /> }/>
          <Route exact path="/" element={ <MainLayout /> }/>
          <Route exact path="/Profile" element={ <Profile /> }/>
          <Route exact path="/Contact" element={ <Contact /> }/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App





    
