
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import SoftwareDev from './Pages/SoftwareDev'
import ScrollToTop from './components/ScrollToTop'
import WebsiteDev from './Pages/WebsiteDev'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ApplicationDev from './Pages/ApplicationDev'
import Networking from './Pages/Networking'
import DigitalMarketing from './Pages/DigitalMarketing'
import GraphicDesigning from './Pages/GraphicDesigning'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const App = () => {
  return (
    < >
    <ToastContainer
  position="top-right"
  autoClose={3000}
  theme="colored"
/>
     <BrowserRouter>
       <ScrollToTop />
       <Navbar/>
     <Routes>
<Route path='/' element={<MainPage/>}/>
<Route path='/about' element={<AboutUs/>}/>
<Route path='/contact' element={<ContactUs/>}/>
<Route path='/software-dev' element={<SoftwareDev/>}/>
<Route path='/website-dev' element={<WebsiteDev/>}/>
<Route path='/application-dev' element={<ApplicationDev/>}/>
<Route path='/networking' element={<Networking/>}/>
<Route path='/digital-marketing' element={<DigitalMarketing/>}/>
<Route path='/graphic-designing' element={<GraphicDesigning/>}/>

     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
