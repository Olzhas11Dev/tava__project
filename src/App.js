
import AboutUs from './components/AboutUs'
import BannerInfo from './components/BannerInfo'
import ContactUs from './components/ContactUs'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Testimonials from './components/Testimonials'
import Vlog from './components/Vlog'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BannerInfo/>
      <AboutUs/>
      <Service/>
      <Testimonials/>
      <Vlog/>
      <ContactUs/>
    </div>
  );
}

export default App;
