import React from 'react'
import backgroundVideo from './video/backgroundVideo.mp4'

const BackgroundVideo =() => {
    
    return (
        <div>
            <video autoPlay loop muted id="video">
                <source src ={backgroundVideo} type = 'video/mp4'/>
            </video>
        </div>
    )
}

export default BackgroundVideo
