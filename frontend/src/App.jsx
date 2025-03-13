import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Users from './Pages/Users.jsx';
import Navbar from './Pages/Navbar.jsx';
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Users/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
