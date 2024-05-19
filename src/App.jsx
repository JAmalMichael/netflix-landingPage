import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Showcase from './sections/Showcase'
import Footer from './sections/Footer'



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Showcase />}  />  
      <Route path='/footer' element={<Footer />}  />  
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
