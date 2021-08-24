import React,{ useEffect,useState } from 'react'
import '../style/vlog.css'
import vlogDb from '../dbs/vlogDb'
import ReactPlayer from 'react-player'



function Vlog() {

    const[modal,setModal] = useState(false)
    const[tempUrl,setTempUrl] = useState('')

    // We add class overflow-hidden to get rid of scroll
    useEffect(() => {
        if (modal) document.body.classList.add('overflow-hidden');
        else document.body.classList.remove('overflow-hidden');
      }, [modal]);
    

     // When we clock outside it closes 
   useEffect(()=>{
       let handler = document.addEventListener('mousedown',function(){
           setModal(false)
       })
       return document.removeEventListener('mousedown',handler)
   })

   

    const getVideo =(item)=>{
        setModal(true)
        setTempUrl(item.path)
    }


    return (
        <div className='vlog_container' >
            <h1 className='vlog_title'>VLOG</h1>
            <div className='vlogContainers'>
               {vlogDb.map((vlog)=>{
                   return (
                       <div key={vlog.id} className='oneVlog'  >
                          <img src={vlog.image} alt=""/>
                            <div className={modal ? '' : 'vlog_mask'} onClick={()=>getVideo(vlog)}>
                              <div className='vlog_text_content' >
                                <div className='vlog_name' >{vlog.vlogName}</div>
                                <div className='vlog_Description'>{vlog.vlogDescription}</div>
                            </div>
                          </div>
                       </div>
                   )
               })}
            </div>
            
            {modal ?
            <div className='vlog_modal_main' >
                <div className='player-wrapper' >
                    <ReactPlayer 
                    width='60%'
                    height='60%'
                    controls 
                    url={tempUrl} 
                    className='react-player'
                    
                    /> 
                </div>
                <div className='overlay' ></div>
            </div>
            : null
        }
            
        </div>
    )
}

export default Vlog
