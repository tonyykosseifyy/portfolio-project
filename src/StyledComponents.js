import styled from 'styled-components' ;



export const Title = styled.h1`
  font-size: clamp(.8rem , 2.7rem , 4.5rem) ;
  z-index: 100 ;
  color: white ;
  @media (max-width: 860px) {
      text-align: center ;
  }
  @media (max-width:400px) {
        font-size: 2rem ;
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
`
export const About = styled.section`
  min-height: 200vh ;
  width: 100% ;

`
export const Contact = styled.section`
  clip-path: polygon(0 0, 50% 25%, 100% 0, 100% 100%, 0 100%, 0% 60%, 0 0);
  height: 500px ;
  width: 100% ;
  background: black ;
  padding-top: 200px;
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
