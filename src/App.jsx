import './App.css'
import Globe from './components/Globe/globe'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Router, Routes, Route } from 'react-router-dom';


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Globe/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
