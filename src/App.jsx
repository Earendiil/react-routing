import Home from './Home'
import Contact from './Contact'
import About from './About'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
      
      
    </Router>
  )
}

export default App
