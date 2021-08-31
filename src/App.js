
import AboutUs from './components/AboutUs'
import BannerInfo from './components/BannerInfo'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Testimonials from './components/Testimonials'
import YoutubePage from './components/YoutubePage'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BannerInfo/>
      <AboutUs/>
      <Service/>
      <Testimonials/>
      <YoutubePage/>
      <ContactUs/>
      {/* <Footer/> */}
     
    </div>
  );
}

export default App;
