import React,{ useState,useEffect } from 'react'
import facebookDb from '../dbs/facebookDb'
import '../style/vlogFaceBook.css'


function VlogFaceBook() {
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
                <div className='facebookList_main' >
                     {facebookDb.map((e)=>{
                return (
                <div key={e.id} className='facebook_item'>
                    <iframe  src={e.path} width="267" height="476" style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                    <div onClick={()=>callModal(e.path)} className='facebook_mask'></div>
                </div>
                    )
                 })}
                    {openModal ?
                    <div className='facebook_bg'>
                            <div className="facebook_modal">
                            <iframe title={link} className='facebook_modal_screen' src={link} frameBorder="0" allowFullScreen={true}></iframe>
                    </div>
                        </div> :null }
                    </div>
                    
             </div>
    )
}

export default VlogFaceBook
