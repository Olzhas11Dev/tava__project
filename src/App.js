import AboutUs from './components/AboutUs'
import BannerInfo from './components/BannerInfo'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Testimonials from './components/Testimonials'
import VlogFaceBook from './components/VlogFaceBook'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BannerInfo/>
      <AboutUs/>
      <Service/>
      <Testimonials/>
      <VlogFaceBook/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
