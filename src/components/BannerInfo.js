import {useEffect} from 'react'
import '../style/bannerInfo.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from "typewriter-effect"

function BannerInfo() {
   useEffect(()=>{
    AOS.init()
   },[])

    return (
        <div  className='bannerInfo_container'>
            <img  className='bannerInfo_img' src="./image/Banner.jpg" alt=""/>
            <div  className='bannerInfo_content' >  
                    <h1  data-aos="fade-left" data-aos-duration="2000">We provide </h1>
                    <h2 >Full medical care</h2>       
                    <Typewriter 
                     options={{
                        strings: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nemo reprehenderit ',
                        autoStart: true,
                        loop: true,
                      }}
                    
                      />   
                {/* <p data-aos="fade-up "  >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nemo reprehenderit earum itaque dolor. 
                Repudiandae eaque ipsa deserunt labore totam odio iure. Alias ex, cum rerum nobis repellat iusto hic.</p> */}
            </div>
        </div>
    )
}
export default BannerInfo
