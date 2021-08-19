import React from 'react'
import '../style/vlog.css'
import vlogDb from '../dbs/vlogDb'


function Vlog() {
    return (
        <div className='vlog_container' >
            <h1 className='vlog_title'>VLOG</h1>
            <div className='vlogContainers'>
               {vlogDb.map((vlog)=>{
                   return (
                       <div className='oneVlog'>
                          <img src={vlog.image} alt=""/>
                            <div className='vlog_mask'>
                              <div className='vlog_text_content' >
                                <div className='vlog_name' >{vlog.vlogName}</div>
                                <div className='vlog_Description'>{vlog.vlogDescription}</div>
                            </div>
                          </div>
                       </div>
                   )
               })}
            </div>
        </div>
    )
}

export default Vlog
