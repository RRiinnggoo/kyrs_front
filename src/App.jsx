import './App.css';
import { Routes, Route } from "react-router-dom";
import { Index } from './pages/index/Index';
import { Services } from './pages/services/Services';
import { Contacts } from './pages/contacts/Contacts';
import { Profile } from './pages/profile/Profile';
import { Panel } from './pages/panel/Panel';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
function App() {

  return (
  <>
  <Header/>
  <Routes>
  <Route path='/' element={<Index />} />
  <Route path='/services' element={<Services />} />
  <Route path='/contacts' element={<Contacts />} />
  <Route path='/panel' element={<Panel />} />
  <Route path='/profile' element={<Profile />} />
  </Routes>
  <Footer/>
  </>
  )
}

export default App
