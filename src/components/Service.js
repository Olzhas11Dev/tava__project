import React,{ useRef,useState,useEffect} from 'react'
import '../style/service.css'
import serviceDb from'../dbs/serviceDb'
import { BsArrowLeft,BsArrowRight } from 'react-icons/bs' 
import { AiOutlineMedicineBox,AiOutlineCloseCircle } from 'react-icons/ai' 
import AOS from 'aos';
import 'aos/dist/aos.css';


function Service() {

const slider = useRef(null)
const[modal,setModal] = useState(false)
const[chosenObject,setChosenObject] = useState('')

    useEffect(() => {
        if (modal) document.body.classList.add('service_overflow-hidden');
        else document.body.classList.remove('service_overflow-hidden');
      }, [modal]);
    
      useEffect(()=>{
        AOS.init({duration:2000})
       },[])

    // useEffect(()=>{
    //      let handler = document.addEventListener('mousedown',function(event){
    //       setModal(false)
    //     })
    //     return document.removeEventListener('mousedown',handler)
    // })

    

 function handleToLeft (e){
     e.preventDefault()
    //  console.log(slider.current.offsetWidth)
     slider.current.scrollLeft -= slider.current.offsetWidth
    //  console.log(slider.current.scrollLeft)
 }

 function handleToRight (e){
    e.preventDefault()
    // console.log(slider.current.scrollLeft)
    slider.current.scrollLeft += slider.current.offsetWidth
}

function showDetails(element){
    setModal(true)
   serviceDb.map((item)=>{
      if(element.id===item.id){
        setChosenObject(item)
      }
     return item
   })
}

    return (
        <div id='service' className='service_container' >
           <div data-aos="fade-up" className='service_transparentTitle'>Our Services</div>
            <h1 data-aos="fade-up" >What we <span>offer</span></h1>
            <div className='service_container_slider' >
                <BsArrowLeft className='service_btn_slider' onClick={handleToLeft}/>
                <div className='service_row' ref={slider}>
                    {serviceDb.map((item)=>{
                        return (
                            <div onClick={()=>showDetails(item)} key={item.id} className='service_card' >
                                <AiOutlineMedicineBox className='service_icon' />
                                <div className='service_title'>Service {item.id+1}</div>
                                <div className='service_service'> Description </div>
                            </div>
                        )
                    })} 
                    
                </div>
                <BsArrowRight onClick={handleToRight} className='service_btn_slider'/>
           </div>
           {modal ? <div className='service_modal'>
               <div className='service_modal_conatiner' >
                <h2 className='modal_title' >{chosenObject.title}</h2>
                <p className='modal_description' >{chosenObject.description}</p>
                <AiOutlineCloseCircle className='modal_close_button' onClick={()=>setModal(false)}/>
                
            </div>
            </div>:null}
            
             
        </div>
    )
}

export default Service
