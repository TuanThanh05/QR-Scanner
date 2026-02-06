
import { Routes ,Route} from 'react-router-dom'
import AboutPage from './pages/About'
function App() {
 

  return (
   <Routes>
    <Route path="/" element={<p>Home Page</p>}/>
    <Route path='/about' element={<AboutPage/>}/>
   </Routes>
  )
}

export default App
