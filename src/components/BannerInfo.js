import {useEffect} from 'react'
import '../style/bannerInfo.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function BannerInfo() {
   useEffect(()=>{
    AOS.init({duration:2000})
   },[])

    return (
        <div  className='bannerInfo_container'>
            <img  className='bannerInfo_img' src="./image/Banner.jpg" alt=""/>
            <div  className='bannerInfo_content' >  
                    <h1  data-aos="fade-left" >Lo ipsum</h1>
                    <h2 data-aos="fade-right">Lorem dolor amet</h2>        
                <p data-aos="fade-left" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nemo reprehenderit earum itaque dolor. 
                Repudiandae eaque ipsa deserunt labore totam odio iure. Alias ex, cum rerum nobis repellat iusto hic.</p>
            </div>
        </div>
    )
}
export default BannerInfo
