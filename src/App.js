import React from 'react'
import './App.css' ;
import { Navbar , Button , Title , Container , Paragraph , MainButton , FlexWrapper , SmallWrapper , FlexContainer , InfoWrapper , Wrapper } from './Components/StyledComponents' ;
import logo from './Assets/logo.svg' ;
import desktopImage from './Assets/desktop-image.svg' ;
import userImage from './Assets/user.svg' ;
import messageImage from './Assets/messages.svg' ;
import desktopUsers from './Assets/desktop-users.svg' ;
import backgroundDesktopTop from './Assets/background-top-desktop.svg' ;
import backgroundDesktopTop2 from './Assets/background-desktop-top2.svg' ;

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

            <Wrapper parent margin='40px 0' >
                <img src={backgroundDesktopTop} alt='decoration' />
                <Wrapper backgroundColor='#F6FBFF' >
                    <FlexContainer>
                        <InfoWrapper>
                            <h1>Grow Together</h1>
                            <p>
                                Generate meaningful discussions with your audience and build a strong,loyal community.
                                Think of the insightful you miss out on with feedback form.
                            </p>
                        </InfoWrapper>
                        <img src={desktopUsers} alt='decoration' />
                    </FlexContainer>
                    
                </Wrapper>
                <img src={backgroundDesktopTop2} alt='decoration' />
            </Wrapper>
            
            <Wrapper parent margin='40px 0' >
                <Wrapper  >
                    <FlexContainer>
                    <img src={desktopUsers} alt='decoration' />
                        <InfoWrapper>
                            <h1>Flowing Conversations</h1>
                            <p>
                                You wouldn't paginate a conversation in real life, so why do it online? 
                                Our threats have just-in-time loading for a more natural flow 
                            </p>
                        </InfoWrapper>
                        
                    </FlexContainer>
                    
                </Wrapper>
            </Wrapper>

            <Wrapper parent margin='40px 0' >
                <img src={backgroundDesktopTop} alt='decoration' />
                <Wrapper backgroundColor='#F6FBFF' >
                    <FlexContainer>
                    <img src={desktopUsers} alt='decoration' />
                        <InfoWrapper>
                            <h1>Your Users</h1>
                            <p>
                                it takes no time to integrate huddle with your app's authentication solution,
                                This means once signed in to your app , your users can start chat immediatly.
                            </p>
                        </InfoWrapper>
                        
                    </FlexContainer>
                </Wrapper>
                <img src={backgroundDesktopTop2} alt='decoration' />
            </Wrapper>

            <Container >
                <Title>Ready to build the Community?</Title>
                <MainButton margin='30px 0' >
                    Get started for free
                </MainButton>
            </Container>

        </div>
    )
} ;

export default App ;

{/*  <img src={desktopUsers} alt='decoration' />    */}