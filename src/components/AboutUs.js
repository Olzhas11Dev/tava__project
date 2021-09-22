import React,{useEffect}from 'react'
import '../style/aboutUs.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import photo from  '../../public/image/about_us.jpg'

// let squares = [
//     {
//         id:1,
//         title: 'Latest Equipment'
//     },
//     {
//         id:2,
//         title: 'Quality Service'
//     }, {
//         id:3,
//         title: 'Skilled Team'
//     }, {
//         id:4,
//         title: 'Positive Reviews'
//     }
// ]

function AboutUs() {
    useEffect(()=>{
        AOS.init({duration:2000})
       },[])
    return (
        <div id='about_us' className='about_container' >
            <div className='about_left'>
               {/* {squares.map((e)=>{
                   return (
                       <div key={e.id}  className='about_square'>
                           <div className='aboutDefalt' >
                                <div className='aboutNumber'>{e.id}</div>
                                <div className='aboutName'>{e.title}</div>
                                <div className='about_line' >_____</div>
                            </div>
                            <div className='mask'>
                                <div className='maskNumber'>{e.id}</div>
                                <div className='maskName'>{e.title}</div>
                            <div className='mask_line' >_____</div>
                        </div>
                       </div>
                   )
               })} */}
               <img  src="./image/about_us.jpg" alt=""/>
            </div > 
            <div className='about_right'>
                <h2>About Us</h2>
                <p data-aos="fade-left"  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. culpa similique provident optio nonr  illum totam officia! Officiis mollitia amet placeat</p>
                <section className='about_details' >
                    <div data-aos="fade-left"  className='about_list_details'> <span>✔</span> 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. culpa similique</div>
                    <div data-aos="fade-left"  className='about_list_details'> <span>✔</span> 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. culpa similique</div>
                    <div data-aos="fade-left"  className='about_list_details'> <span>✔</span> 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit..</div>
                    <div data-aos="fade-left"  className='about_list_details'> <span>✔</span> 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. </div>
                    <div data-aos="fade-left"  className='about_list_details'> <span>✔</span> 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. culpa similique</div>
                </section>
                <a href="https://www.youtube.com/watch?v=rx8KuOt2IEM" target='blank'><button className='about_btn' > Watch About Us </button></a>
            </div>
        </div>
    )
}

export default AboutUs
