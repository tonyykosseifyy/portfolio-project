import React, { createRef , useEffect } from 'react'
import './App.css' ;
import './styles.sass' ;
import video from './video.mp4' ;


function App() {
  const videoRef = createRef(null) ;
  useEffect(() => {
      videoRef.current.play() ;
  }, [])

        return (
        <div className='app'>
            <video ref={videoRef} autoplay muted loop>
              <source src={video} />
          </video>

        </div>


    )
} ;

export default App ;
