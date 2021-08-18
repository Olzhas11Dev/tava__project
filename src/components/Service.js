import React from 'react'
import '../style/service.css'
import serviceDb from'../serviceDb'


function Service() {

    return (
        <div className='service_container' >
           <div className='service_transparentTitle'>Our Services</div>
            <h1>What we <span>offer</span></h1>
            <div className='service_container_slice' >
                <button>left</button>
                <div className='service_row'>
                    {serviceDb.map((item)=>{
                        return (
                            <div className='service_card' >
                            <div key={item.id} className='service_item'>{item.title}</div>
                            </div>
                        )
                    })} 
                </div>
                <button>right</button>
           </div>
        </div>
    )
}

export default Service
