import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

function App() {
  

  return (
    // <div className=' text-white p-11'>
    <div className='grid place-items-center'>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<LogIn/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
      </div>
    // </div>
  )
}

export default App
