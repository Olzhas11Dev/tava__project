import React ,{ useEffect ,useState}from 'react'
import '../style/contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube } from 'react-icons/fa'
import emailjs from 'emailjs-com'

function ContactUs() {

    const[firstName,setFirstName] = useState('')
    const[alarm,setAlarm] = useState(false)

    useEffect(()=>{
        AOS.init()
       },[])

       function sendEmail(e) {
            e.preventDefault();
        
            if(firstName!==''){

                emailjs.sendForm('service_pzn7wdc', 'template_ifsnjpp', e.target, 'user_WH70CXSZ5QV6LLpZWldSV')
                .then((result) => {
                    console.log(result.text);    
                }, (error) => {
                    console.log(error.text);
                });
                e.target.reset()

                setAlarm (false)
            } else{
                setAlarm(true)
            }
            setFirstName('')
      }

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
                
                <form onSubmit={sendEmail} className="contactUs_right">  
                    <div className="contactUs_inputs">
                        <input style={{border: alarm && 'red 1px solid'}} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder='Your name*' name="name" value={firstName}/>
                        <input type="text" placeholder='Your Phone*' name="phone"/>
                        <input type="text" placeholder='Your Email*' name="email"/>
                         <textarea name="" id="" cols="30" rows="10" placeholder='Message' name="message" ></textarea>
                        <div className="alarm_inputs">{alarm && <div className='alam_text'>Please add the name</div> }</div>
                    </div>
                    {/* <button className='about_btn' >Send Message</button> */}
                    <input  className='about_btn' type="text"type="submit" value="Send Message"/>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
