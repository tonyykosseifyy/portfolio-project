import React, { createRef , useEffect } from 'react'
import './App.css' ;
import './styles.sass' ;
import video from './video.mp4' ;
import { Title , TitleSpan , Home , MainButton , Navbar , Link , About , Contact ,SectionTitle , Bar } from './StyledComponents' ;
import { FaArrowRight } from 'react-icons/fa' ;
import Fade from 'react-reveal/Fade' ;

function App() {
  const videoRef = createRef(null) ;
  useEffect(() => {
      videoRef.current.play() ;
  }, [])
        return (
        <div className='app'>
          <Home id='home'>
            <video ref={videoRef} autoplay muted loop>
              <source src={video} />
            </video>
              <Title>
                Hello, I'm <TitleSpan color='#832D21'>Tony Kosseify.</TitleSpan> <br/>
                I'm a React Front End Developer
              </Title>
              <MainButton href='#about'>
                View my Work
                <FaArrowRight />
              </MainButton>
            </Home>

            <Navbar>
              <Link href='#home'>Home</Link>
              <Link href='#about'>About</Link>
              <Link href='#projects'>Projects</Link>
              <Link href='#contact'>Contact</Link>
            </Navbar>

            <About id='about'>

            </About>

            <Contact id='contact'>
                <Fade left>
                  <SectionTitle color='white'>
                    Contact
                  </SectionTitle>
                </Fade>
                <Fade left >
                  <Bar color='white'/>
                </Fade>
            </Contact>
        </div>


    )
} ;

export default App ;
