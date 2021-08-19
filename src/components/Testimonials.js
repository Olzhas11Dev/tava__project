import React,{ useState,useRef } from 'react'
import testimonDb from '../testimonDb'
import '../style/testimon.css'

let radioBtn = [
    {
        id:0,
        status:true
    },
    {
        id:1,
        status:false
    },
    {
        id:2,
        status:false
    }
]

let activeIndex=0

function Testimonials() {

    const slider = useRef(null)
    const[dataBtn, setDataBtn] = useState(radioBtn)
    function  changeStatus (event,item){
        let changedArray = radioBtn.map((elem)=>{
            elem.status = false         //reset all. we have only one active
            if(item.id===elem.id){
                elem.status = true
                activeIndex = elem.id
            }
            return elem
        })
        setDataBtn(changedArray)

        console.log(slider.current.offsetWidth,slider.current.scrollLeft)
        // slider.current.scrollLeft+=slider.current.offsetWidth

        if(activeIndex===0){
            slider.current.scrollLeft=0
        }
        if(activeIndex===1){
            slider.current.scrollLeft=slider.current.offsetWidth
        } 
        if(activeIndex===2){
            slider.current.scrollLeft=slider.current.offsetWidth*2
        } 

    }      
   console.log(dataBtn)
    return (
        <div className='testimon_container' >
           <div className='testimon_Left'>
           <img src="./image/testimonials-right.png" alt=""/>
           </div>
           <div className='testimon_review'>
               <h1 className='testim_title' >Testimonials</h1>
               <div ref={slider}  className='testimon_card_section' >
               {testimonDb.map((oneCard)=>{
                   return (
                       <div key={oneCard.id} className='testim_oneCard' >
                         <div  className='testimon_text_content'>{oneCard.review} </div>
                         <div className='testim_name' >-{oneCard.fullName}</div>
                         <div className='testim_role'>-{oneCard.role}-</div>
                    </div>
                   )
               })}
              </div>
          
               <div className=" testim_btn_esction ">{radioBtn.map((button)=>{
                    return ( 
                        <input className='testim_btnRadio' onChange={(event)=>changeStatus(event,button)} type="radio"  checked={button.status} key={button.id}/>
                    )
                })}
            </div>
           </div>
           <div className='testimon_right'>
               <img src="./image/testimonials-left.png" alt=""/>
           </div>
        </div>
    )
}

export default Testimonials
