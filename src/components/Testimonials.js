import React,{ useState } from 'react'
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
    }      
    console.log(dataBtn,activeIndex)
    return (
        <div className='testimon_container' >
           <div className='testimon_Left'></div>
           <div className='testimon_review'>
           {testimonDb[activeIndex].review}
               <div>{radioBtn.map((button)=>{
                return (
                    <input onChange={(event)=>changeStatus(event,button)} type="radio"  checked={button.status} key={button.id}/>
                )
               })}</div>
           </div>
           <div className='testimon_right'></div>
        </div>
    )
}

export default Testimonials
