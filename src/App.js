import React from 'react'
import './App.css' ;
import { Navbar , Button , Title , Container , Paragraph , MainButton , FlexWrapper , SmallWrapper } from './Components/StyledComponents' ;
import logo from './Assets/logo.svg' ;
import desktopImage from './Assets/desktop-image.svg' ;
import userImage from './Assets/user.svg' ;
import messageImage from './Assets/messages.svg' ;

function App() {
    return (
        <div className='app'>
            <Navbar>
                <img src={logo} alt='logo' />
                <Button>Try it Free</Button>
            </Navbar>
            <Container >
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
            
            <Container>
                <img src={desktopImage} alt='decoration' />
                <FlexWrapper>
                    <SmallWrapper>
                        <img src={userImage} alt='users icon' />
                        <h1>1.4k+</h1>
                        <p>Communities Formed</p>
                    </SmallWrapper>
                    
                    <SmallWrapper>
                        <img src={messageImage} alt='messages icon' />
                        <h1>2.7m+</h1>
                        <p>Messages Sent</p>
                    </SmallWrapper>

                </FlexWrapper>
            </Container>
        </div>
    )
} ;

export default App ;