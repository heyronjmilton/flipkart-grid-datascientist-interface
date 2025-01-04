import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import FileUpload from './FileUpload.jsx'
import Nav from './Nav.jsx'
import ImageGrid from './ImageGrid.jsx'
import CardGrid from './cardGrid.jsx'
import BatchImageGrid from './BatchImageGrid.jsx'

function App() {
  return (
    <>
     <BrowserRouter>
     <Nav/>
        <Routes>
        
          <Route path='/' element={<Home/>}  />     
          <Route path='/upload' element={<FileUpload/>} />
          <Route path='/data-analysis' element={<ImageGrid/>} />
          <Route path='/data-review' element={<CardGrid/>} />
          <Route path='/batch/:deviceId/:batchId' element={<BatchImageGrid/>} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
