import React, { createRef , useEffect } from 'react'
import './App.css' ;
import './styles.sass' ;
import video from './video.mp4' ;
import { Title , TitleSpan , Home , MainButton} from './StyledComponents' ;

function App() {
  const videoRef = createRef(null) ;
  useEffect(() => {
      videoRef.current.play() ;
  }, [])

        return (
        <div className='app'>
          <Home>
            <video ref={videoRef} autoplay muted loop>
              <source src={video} />
            </video>
              <Title>
                Hello, I'm <TitleSpan color='#832D21'>Tony Kosseify.</TitleSpan> <br/>
                I'm a React Front End Developer
              </Title>
              <MainButton>View my Work</MainButton>
            </Home>
        </div>


    )
} ;

export default App ;
