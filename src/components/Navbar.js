import React,{ useState } from 'react'
import '../style/navbar.css'

function Navbar() {
    const[toggle,setToggle] = useState(false)

    function closeMenu () {
        if(window.innerWidth>500){
            setToggle(false)
        }
    }

    window.addEventListener('resize',closeMenu)

    return (
        <div id='home' className="navbar" >
            <div className='navbar_logo' >Logo</div>
                <ul className={toggle ? 'header_toggle' :'navbar_links' } >
                    <li><a href="#about_us">About</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#vlog">Vlog</a></li>
                    <li><a href="#contact_us">Contact Us</a></li>
                    <li className='navbar_close' onClick={()=>setToggle(!toggle)} >x</li>
                </ul>

            <div className="navbar_menu" onClick={()=>setToggle(!toggle)} >Menu</div>
        </div>
    )
}

export default Navbar
