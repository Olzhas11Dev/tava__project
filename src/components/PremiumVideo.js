import React,{useRef,useState,useEffect} from 'react'
import '../style/premium_video.css'
import premData from '../dbs/prem_videDB'
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from'react-icons/io'

function PremiumVideo() {

const slider = useRef(null)
const[premModal,setPremModal]= useState(false) 
const[premLink,setPremLink] = useState('')

useEffect(() => {
    if (premModal) document.body.classList.add('service_overflow-hidden');
    else document.body.classList.remove('service_overflow-hidden');
  }, [premModal]);

const handleLeft = (e)=>{
    e.preventDefault()
    slider.current.scrollLeft -=slider.current.offsetWidth
    
    }

    const handleRight = (e)=>{
        e.preventDefault()
        slider.current.scrollLeft += slider.current.offsetWidth
    }

    const getLink =(path)=>{
        setPremModal(true)
        setPremLink(path)
    }

    useEffect(()=>{
        let handler = document.addEventListener('mousedown',function(){
            setPremModal(false)
        })
        return document.removeEventListener('mousedown',handler)
    })

   


    return (
        <div className='prem_vide_main' >
            <h1 className='prem_vid_title' >Premium</h1>
            <div className="prem_video_container">
                <div className="prem_log">
                     <IoIosArrowDropleftCircle onClick={handleLeft} className='prem_left prm_logo'  />
                </div>
                <div ref={slider} className="prem_video_row">
                    {premData.map((elem)=>{
                        return (
                            <div key={elem.id} className='prem_card' >
                                <iframe src={elem.path} frameBorder="0"></iframe>
                                <div onClick={()=>getLink(elem.path)} className='premium_mask'></div>
                            </div>
                        )
                    })}
                     {premModal ?
                    <div className='premium_bg'>
                            <div className="premium_modal">
                            <iframe title={premLink} className='premium_modal_screen' src={premLink} frameBorder="0"></iframe>
                    </div>
                        </div> :null }
                </div>
                <div className="prem_log">
                     <IoIosArrowDroprightCircle onClick={handleRight} className='prem_right prm_logo'  />
                </div>
            </div>
        </div>
    )
}

export default PremiumVideo
