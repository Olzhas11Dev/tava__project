import React from 'react'
import '../style/footer.css'
import { FaAddressCard  } from 'react-icons/fa'
import {FiPhoneCall,FiMail} from 'react-icons/fi'


function Footer() {
    return (
        <div className='footer_main' >
            <div className='footer_container' >
              <div className='footer_left' >
                <h1>Contact</h1>
                  <div className='footer_address' >
                    <div className='footer_logo' > <FaAddressCard/></div> 
                    <div>Level 1/255 Broadway, Newmarket, Auckland 1023</div>   
                  </div>
                  <div className='footer_call' >
                    <div className='footer_logo'> <FiPhoneCall/></div> 
                    <div>+64272699968</div>   
                  </div>
                  <div className='footer_email' >
                    <div className='footer_logo'> <FiMail/></div> 
                    <div> <a href="mailto:Info@Tava.nz">Info@Tava.nz</a> </div>   
                  </div>
              </div>
              <div className='footer_right' >
                    <h1  >Links</h1>
                  <div> <a href="#home">Home</a> </div>
                  <div> <a href="#about_us">About</a> </div>
                  <div> <a href="#service">Service</a> </div>
                  <div> <a href="#testimonials">Testimonials</a> </div>
                  <div> <a href="#vlog">Vlog</a> </div>
                  <div> <a href="#contact_us">Contact Us</a> </div>
              </div>
            </div>
           <div className='footer_copyright' >
             <div className='footer_copyright_logo'>Ⓒ</div>
             <div>{new Date().getFullYear()} Copyright</div>
             
             </div>
        </div>
    )
}

export default Footer
