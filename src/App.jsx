import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Showcase from './sections/Showcase'



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Showcase />}  />  
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
