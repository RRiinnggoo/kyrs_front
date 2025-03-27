import { Routes, Route } from "react-router-dom";
import { Index } from './pages/index/Index';
import { Services } from './pages/services/Services';
import { Contacts } from './pages/contacts/Contacts';
import { Basket } from './pages/basket/Basket';
import { Profile } from './pages/profile/Profile';
import { Panel } from './pages/panel/Panel';
import { Header} from './components/header/Header'
import { Footer } from './components/footer/Footer';
import UserServices from './pages/isadmin/UserServices';
import AdminServices from './pages/isadmin/AdminServices';
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
  <Route path='/basket' element={<Basket />} />

  <Route path="/services" element={<UserServices />} />
  <Route path="/admin/services" element={<AdminServices />} />

  </Routes>
  <Footer/>
  </>
  )
}

export default App
