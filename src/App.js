import React, { createRef , useEffect , useState } from 'react'
import './App.css' ;
import './styles.sass' ;
import video from './video.mp4' ;
import { Title , TitleSpan , Home , MainButton ,
  Navbar , Link , About , Contact ,SectionTitle ,
  Bar,Hexagon, AboutContainer , Container , ContactPhrase ,
  SubmitButton , Projects } from './StyledComponents' ;
import { FaArrowRight } from 'react-icons/fa' ;
import Fade from 'react-reveal/Fade' ;
import Flip from 'react-reveal/Flip';
import { BsClock } from 'react-icons/bs'
import { DiResponsive } from 'react-icons/di' ;
import { FaRegLightbulb } from 'react-icons/fa' ;
import { IoIosRocket } from 'react-icons/io' ;
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import emailjs from 'emailjs-com';
import Snackbar from '@material-ui/core/Snackbar';

function App() {
  const videoRef = createRef(null) ;
  useEffect(() => {
      videoRef.current.play() ;
  }, [])
  const [ name , setName ] = useState('') ;
  const [ email , setEmail ] = useState('');
  const [ open , setOpen] = useState(false) ;
  const [ message , setMessage ] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vl137q4', 'template_xgu4yiq', e.target, 'user_rbTnaa0RNXVWWQvqJDOzW')
      .then((result) => {
          setOpen(true) ;
          setMessage('Your message was sent successfully !')
      }, (error) => {
        setOpen(true) ;
        setMessage('An unexpected errro occured , Try resending the message')
      });
  }
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
                  <Fade>
                    <h3>Fast</h3>
                    <p>Fast load times and lag free interaction, my highest priority.</p>
                    </Fade>
                  </Container>

                  <Container>
                    <Flip>
                      <Hexagon>
                        <DiResponsive />
                      </Hexagon>
                    </Flip>
                    <Fade>
                      <h3>Responsive</h3>
                      <p>My layouts will work on any device, big or small.</p>
                      </Fade>
                    </Container>

                    <Container>
                      <Flip>
                        <Hexagon>
                          <FaRegLightbulb />
                        </Hexagon>
                      </Flip>
                      <Fade>
                        <h3>Intuitive</h3>
                        <p>Strong preference for easy to use, intuitive UX/UI.</p>
                      </Fade>
                      </Container>
                      <Container>
                        <Flip>
                          <Hexagon>
                            <IoIosRocket />
                          </Hexagon>
                        </Flip>
                          <Fade>
                          <h3>Dynamic</h3>
                          <p>Websites don't have to be static, I love making pages come to life.</p>
                          </Fade>
                        </Container>

              </AboutContainer>
            </About>

            <Projects id='projects'>
              <Fade left>
                <SectionTitle color='black'>
                  Projects
                </SectionTitle>
              </Fade>
              <Fade left >
                <Bar color='black'/>
              </Fade>
            </Projects>

            <Contact id='contact'>
                <Fade left>
                  <SectionTitle color='white'>
                    Contact
                  </SectionTitle>
                </Fade>
                <Fade left >
                  <Bar color='white'/>
                </Fade>
                <Fade bottom>
                  <ContactPhrase>Have a question or want to work together?</ContactPhrase>
                </Fade>
                <form onSubmit={(e) => handleSubmit(e)} >
                  <TextField
                    id="Name Input"
                    color='secondary'
                    required
                    label="Name"
                    value={name}
                    type='text'
                    name="user_name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    id="Email Input"
                    color='secondary'
                    required
                    label="Email"
                    value={email}
                    type='email'
                    name="user_email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextareaAutosize
                    aria-label="Message"
                    placeholder="Message"
                    required
                    name="message"
                    style={{
                        margin: '25px 0' ,
                        maxWidth: '100%' ,
                        minHeight: '100px' ,
                        maxHeight: '220px',
                        background: 'transparent' ,
                        color: 'white',
                        outline: 'none',
                        padding: '10px 10px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'light',
                        fontSize: '16.3px',
                        overflow: 'auto !important',
                    }}
                  />
                  <SubmitButton type='Submit' >
                    Submit
                  </SubmitButton>
                  <Snackbar
                    anchorOrigin={{ vertical:'top', horizontal: 'right' }}
                    open={open}
                    onClose={() => setOpen(false)}
                    message={message}
                    key='message'
                    style={{top: '54px'}}
                  />
                </form>
            </Contact>
        </div>


    )
} ;

export default App ;
