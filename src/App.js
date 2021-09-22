import AboutUs from './components/AboutUs'
import BannerInfo from './components/BannerInfo'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Service from './components/Service'
import SocialKit from './components/SocialKit'
import Testimonials from './components/Testimonials'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <BannerInfo/>
      <AboutUs/>
      <Service/>
      <Testimonials/>
      <SocialKit/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
