import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/searchPage' element={<SearchPage/>} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
