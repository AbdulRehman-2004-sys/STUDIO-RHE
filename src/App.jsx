
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Main from './Pages/Main'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
