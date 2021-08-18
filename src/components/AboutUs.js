import React from 'react'
import '../style/aboutUs.css'

let squares = [
    {
        id:1,
        title: 'Latest Equipment'
    },
    {
        id:2,
        title: 'Quality Service'
    }, {
        id:3,
        title: 'Skilled Team'
    }, {
        id:4,
        title: 'Positive Reviews'
    }
]



function AboutUs() {
   
    return (
        <div className='about_container' >
            <div className='about_left'>
               {squares.map((e)=>{
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
               })}
            </div > 
            <div className='about_right'>
                <h2>About Us</h2>
                <p>Results of test procedures processed on site are reported to the health care provider the same day during regular business hours. Testing and services available through our Laboratory include:</p>
                <section className='about_details' >
                    <div className='about_list_details'> <span>✔</span> 
                    All reports for clients are made simple and easy to understand</div>
                    <div className='about_list_details'> <span>✔</span> 
                    User- friendly website offers custom settings for each physician</div>
                    <div className='about_list_details'> <span>✔</span> 
                    We customize panels to meet physician’s needs.</div>
                    <div className='about_list_details'> <span>✔</span> 
                    We customize panels to meet physician’s needs.</div>
                    <div className='about_list_details'> <span>✔</span> 
                    All reports for clients are made simple and easy to understand</div>
                </section>
                <a href="https://www.youtube.com/watch?v=rx8KuOt2IEM" target='blank'><button className='about_btn' > Watch About Us </button></a>
            </div>
        </div>
    )
}

export default AboutUs
