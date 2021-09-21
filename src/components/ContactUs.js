import React ,{ useEffect }from 'react'
import '../style/contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube } from 'react-icons/fa'

function ContactUs() {

    useEffect(()=>{
        AOS.init()
       },[])
    return (
        <div id='contact_us' className='contactUs_main' >
            <h1 className='contact_title' >Contact Us</h1>
            <div className='contactUs_conctainer' >
                <div className="contactUs_left">
                <h1 data-aos="fade-right" data-aos-duration="2000" >Get In Touch <span>With Us</span></h1>
                    <p data-aos="fade-right" data-aos-duration="2000" > For general questions, please send us a message and we’ll get right back to you. You can also call us directly to speak with a member of our service team or insurance expert.</p>
                    <div className='contact_fields' >Fields marked with a * are required.</div>
                    <div className='conatct_socials_icons' >
                        <a href="https://www.facebook.com/" target='blank' ><FaFacebookF/></a> 
                        <a href="https://www.instagram.com/" target='blank' ><FaInstagram/></a>
                        <a href="https://twitter.com/?lang=en" target='blank' > <FaTwitter target='blank'/></a>
                        <a href="https://www.youtube.com/" target='blanket' > <FaYoutube target='blank'/></a>
                    </div>
                </div>
                
                <div className="contactUs_right">  
                    <input type="text" placeholder='Your name*' />
                    <input type="text" placeholder='Your Phone*'/>
                    <input type="text" placeholder='Your Email*'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    <button className='about_btn' >Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
