import styled from 'styled-components' ;



export const Title = styled.h1`
  font-size: clamp(.8rem , 2.7rem , 4.5rem) ;
  z-index: 100 ;
  color: white ;
  @media (max-width: 860px) {
      text-align: center ;
  }
  @media (max-width:400px) {
        font-size: 1.7rem ;
  }
`

export const TitleSpan = styled.span`
  color: ${(props) => props.color || 'inherit'}
`
export const Home = styled.main`
  display: flex ;
  flex-direction: column ;
  align-items:center ;
  justify-content: center ;
  width: 100% ;
  height: 100vh ;
  z-index: 100 ;
`
export const MainButton = styled.a`
  display: flex ;
  align-items : center ;
  justify-content: space-around ;
  color: white ;
  border: 2px solid white ;
  padding: 15px 30px ;
  width: 220px ;
  font-weight: bold ;
  z-index: 100 ;
  margin: 30px 0 ;
  cursor: pointer ;
  transition: .3s ease-in-out ;
  @media (max-width: 300px) {
      width: 80% ;
      margin: 30px auto ;
      padding: 10px 0 ;
  }
  &:hover {
    background-color: #832D21 ;
    border-color: #832D21 ;
  }
  & > svg {
      transition: .3s ease-in-out ;
  }

  &:hover > svg {
    transform: rotate(90deg)
  }
`
export const Link = styled.a`
  cursor: pointer ;
  font-size: 17px ;
  color: white ;
  margin: 0 15px ;
  display: flex ;
  align-items: center ;
  justify-content: center ;
  min-width: 40px ;
  padding: 0 10px ;
  transition: .3s ease-in-out ;
  &:hover {
    color: #832D21;
  }
  @media (max-width: 680px) {
      font-size: 14px ;
      margin: 0 ;
      padding: 0 ;
  }

`

export const Navbar = styled.nav`
  position: sticky;
  top: 0 ;
  left: 0 ;
  right: 0 ;
  width: 100% ;
  background-color: #1F1214;
  min-height: 50px ;
  border-bottom: 4px solid #832D21 ;
  display: flex ;
  padding-left: 20px ;
  z-index: 10000 ;
  @media (max-width: 680px) {
    justify-content : space-evenly ;
    padding-left: 0 ;
  }
`
export const About = styled.section`
  width: 100% ;
  padding-top: 80px ;
`
export const Projects = styled.section`
  width: 100% ;
  margin-top: 100px ;
`

export const CloseButton = styled.button`
  position: fixed ;
  display: ${(props) => props.display } ;
  top: 95px ;
  left: 60px ;
  z-index: 50000 ;
  background: transparent ;
  cursor : pointer ;
  & > svg {
    transform: scale(3) ;
  }
`
export const Chip = styled.button`
  cursor: pointer ;
  background-color: black ;
  color: white ;
  position: relative ;
  min-height: 50px ;
  min-width: 140px ;
  z-index: 1 ;
  padding: 10px 10px ;
  transition: .3s ease-in-out ;
  &::before , &::after {
    content: '' ;
    position: absolute ;
    background-color: red ;
    height: 50% ;
    transition: .3s ease-in-out ;
    width: 0 ;
    z-index: -1 ;
  }
  &:before {
    top: 0;
    left: 0;
    right: auto;
  }
  &:after {
    bottom: 0;
    right: 0;
    left: auto;
  }
  &:hover {
    color: black ;
    &:before {
      width: 100%;
      right: 0;
      left: auto;
    }
    &:after {
      width: 100%;
      left: 0;
      right: auto;
    }
`
export const Contact = styled.section`
  clip-path: polygon(0 0, 50% 25%, 100% 0, 100% 100%, 0 100%, 0% 60%, 0 0);
  width: 100% ;
  background: #1F1214 ;
  padding-top: 250px;
  & > form {
    display: flex ;
    flex-direction: column ;
    align-items: :center ;
    justify-content: center ;
    width: 50% ;
    margin: 50px auto ;
    @media (max-width: 680px) {
        width: 80% ;
    }
  }
  & > form > .MuiFormControl-root {
    margin: 5px 0 ;
  }
  & .MuiFormLabel-root {
    color: white ;
  }
  & .MuiInputBase-input {
    border-bottom: 2px solid white ;
    color: white ;
  }
  & textarea {
    overflow-y : auto ;
    border: 1px solid white
  }
  & textarea:focus {
    border: 2.3px solid white ;
  }
  & textarea::placeholder {
    color: white;
  }
  & textarea::-webkit-scrollbar {
    width: 10px;
    height: 7px !important
  }
  & textarea::-webkit-scrollbar:hover {
    cursor: default ;
  }
  & textarea::-webkit-scrollbar-thumb {
     background-color: #832D21;
     border-radius: 15px;
     transition: .3s ease-in-out ;
  }
  & textarea::-webkit-scrollbar-thumb:hover {
    background-color: #4A0D02 ;
  }
  & textarea::-webkit-scrollbar-track {
     background: #1F1214 ;
     border-radius: 6px;
  }

  }
`

export const SectionTitle = styled.h1`
  font-size: clamp(.8rem , 2.7rem , 4.5rem) ;
  color: ${(props) => props.color || 'black'} ;
  text-align: center ;
  @media (max-width:400px) {
        font-size: 2rem ;
  }
`

export const Bar = styled.div`
  width: ${(props) => props.width || '100px'} ;
  height: 5px ;
  background-color: ${(props) => props.color || 'white'} ;
  margin: 8px auto ;
`

export const AboutContainer = styled.div`
    margin: 60px 0 ;
    width: 100% ;
    display  : grid;
    grid-template-columns: repeat(4, 1fr) ;
    grid-template-rows: 1fr ;
    align-items: center ;
    justify-items: center ;
    padding: 20px 3vw ;
    align-items: center ;
    @media (max-width: 880px) {
      grid-template-columns: repeat(2 , 1fr) ;
      grid-template-rows: 1fr 1fr ;
    }
    @media (max-width: 680px) {
      grid-template-columns: 1fr ;
      grid-template-rows: repeat(4 , 1fr) ;
      padding: 0px 3vw ;
    }
`

export const Container = styled.div`
  margin : 15px 0 ;
  place-self: stretch stretch ;
  display: flex ;
  flex-direction: column ;
  align-items: center ;
  text-align: center ;
  & > h3 {
    margin-top: 8px ;
    font-size: 22px ;
  }
  & > p {
    max-width: 80% ;
    margin-top: 8px;
  }
  @media (max-width: 680px) {
    margin: 30px 0 ;
  }
`

export const Hexagon = styled.div`
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  height: 140px ;
  width: 160px ;
  background: #1F1214 ;
  display: flex;
  justify-content: center ;
  align-items: center ;
  color: white ;
  & > svg {
    transform: scale(3.5) ;
  }
`

export const ContactPhrase = styled.p`
  text-align: center ;
  color: white ;
  font-family: 'Poppins', sans-serif;
  margin-top: 50px
`
export const SubmitButton = styled.button`
  background-color: transparent ;
  padding: 12px 0 ;
  width: 50% ;
  color: white ;
  border: 1px solid white ;
  outline: none ;
  cursor: pointer ;
  transition: .3s ease-in-out ;
  font-weight: bold ;
  margin: 10px auto ;
  font-family: 'Poppins', sans-serif;
  text-transform: upper-case;
  &:hover {
    background-color: #832D21 ;
    border-color: #832D21 ;
  }

`
