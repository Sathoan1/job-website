import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home page/Home'
import Project from './project page/Project'
import Contact from './contact page/Contact'
import Download from './download/Download'

function App() {


  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/download' element={<Download/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
