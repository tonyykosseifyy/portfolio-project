import React from 'react'
import './App.css' ;
import { Navbar , Button , Title , Container , Paragraph , MainButton} from './Components/StyledComponents' ;
import logo from './Assets/logo.svg' ;

function App() {
    return (
        <div className='app'>
            <Navbar>
                <img src={logo} alt='logo' />
                <Button>Try it Free</Button>
            </Navbar>
            <Container  >
                <Title>Build The Community Your Fans Will Love</Title>
                <Paragraph>
                    Huddle re-imagines the way we build communities. You have a 
                    voice, but so does your audience. Create connections with your 
                    users as you engage in genuine discussion
                </Paragraph>
                <MainButton>
                    Get started for free
                </MainButton>
            </Container>
            
            <Container marginTop='40px' >

            </Container>
    
        </div>
    )
} ;

export default App ;