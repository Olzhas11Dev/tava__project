import React,{ useState,useEffect } from 'react'
import youtubeDb from '../dbs/youtubeDb'
import '../style/youtube.css'

function YoutubePage() {
    const[openModal,setOpenModal] = useState(false)
    const[link,setLink] = useState('')

    // We add class overflow-hidden to get rid of scroll
    useEffect(() => {
        if (openModal) document.body.classList.add('overflow-hidden');
        else document.body.classList.remove('overflow-hidden');
      }, [openModal]);
    

    //  When we click outside it closes 
   useEffect(()=>{
       let handler = document.addEventListener('mousedown',function(){
        setOpenModal(false)
       })
       return document.removeEventListener('mousedown',handler)
   })

    function callModal (link){
        setOpenModal(true)
        setLink(link)
    }
    return (
            <div className='youtube_container' >
                <h1 id='vlog' className='youtube_title' >Vlog</h1>
                <div className='youtubeList_main' >
                    {youtubeDb.map((item)=>{
                        return(
                        <div key={item.id} className='youtube_item'>
                            <iframe title={item.title} src={item.link} frameBorder="0"></iframe>
                            <div onClick={()=>callModal(item.link)} className='youtube_mask'></div>
                        </div>
                        )
                    })}
                    {openModal ?
                    <div className='youtube_bg'>
                            <div className="youtube_modal">
                            <iframe title={link} className='youtube_modal_screen' src={link} frameBorder="0"></iframe>
                    </div>
                        </div> :null }
                    </div>
             </div>
    )
}

export default YoutubePage
