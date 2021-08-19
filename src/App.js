
import AboutUs from './components/AboutUs'
import BannerInfo from './components/BannerInfo'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BannerInfo/>
      <AboutUs/>
      <Service/>
      <Testimonials/>
    </div>
  );
}

export default App;
