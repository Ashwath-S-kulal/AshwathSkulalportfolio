import './index.css'
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Project from './Pages/Project';
import Profile from './Pages/Profile';
import Header from './Components/Header';
import PrivateRoute from  './Components/PrivateRoute';
import Portfollio from "./HomePages/Portfollio"
import { BrowserRouter, Routes,Route } from 'react-router-dom';

export default function App() {
  return (
    <div className='bg-gray-900 min-h-screen min-w-fit'>
      <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfollio />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/project" element={<Project />} />
        <Route element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile />} />
        </Route>

      </Routes>
   </BrowserRouter>
    </div>
   
  )
}
