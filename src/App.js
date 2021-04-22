import React, { createRef , useEffect } from 'react'
import './App.css' ;
import './styles.sass' ;
import video from './video.mp4' ;
import { Title , TitleSpan , Home , MainButton ,
  Navbar , Link , About , Contact ,SectionTitle ,
  Bar,Hexagon, AboutContainer , Container} from './StyledComponents' ;
import { FaArrowRight } from 'react-icons/fa' ;
import Fade from 'react-reveal/Fade' ;
import Flip from 'react-reveal/Flip';
import { BsClock } from 'react-icons/bs'
import { DiResponsive } from 'react-icons/di' ;
import { FaRegLightbulb } from 'react-icons/fa' ;
import { IoIosRocket } from 'react-icons/io' ;

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
              <Fade left>
                <SectionTitle color='black'>
                  About
                </SectionTitle>
              </Fade>
              <Fade left >
                <Bar color='black'/>
              </Fade>
              <AboutContainer>
                <Container>
                  <Flip>
                    <Hexagon>
                      <BsClock />
                    </Hexagon>
                  </Flip>
                    <h3>Fast</h3>
                    <p>Fast load times and lag free interaction, my highest priority.</p>
                  </Container>

                  <Container>
                    <Flip>
                      <Hexagon>
                        <DiResponsive />
                      </Hexagon>
                    </Flip>
                      <h3>Responsive</h3>
                      <p>My layouts will work on any device, big or small.</p>

                    </Container>

                    <Container>
                      <Flip>
                        <Hexagon>
                          <FaRegLightbulb />
                        </Hexagon>
                      </Flip>
                        <h3>Intuitive</h3>
                        <p>Strong preference for easy to use, intuitive UX/UI.</p>

                      </Container>
                      <Container>
                        <Flip>
                          <Hexagon>
                            <IoIosRocket />
                          </Hexagon>
                        </Flip>
                          <h3>Dynamic</h3>
                          <p>Websites don't have to be static, I love making pages come to life.</p>

                        </Container>

              </AboutContainer>
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
