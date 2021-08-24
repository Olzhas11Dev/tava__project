import React from 'react'
import '../style/bannerInfo.css'

function BannerInfo() {
    return (
        <div  className='bannerInfo_container'>
            <img  className='bannerInfo_img' src="./image/Banner.jpg" alt=""/>
            <div className='bannerInfo_content' >
                <h1>We provide </h1>
                <h2>Full medical care</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nemo reprehenderit earum itaque dolor. 
                Repudiandae eaque ipsa deserunt labore totam odio iure. Alias ex, cum rerum nobis repellat iusto hic.</p>
            </div>
        </div>
    )
}
export default BannerInfo
