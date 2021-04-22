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
  width: 100% ;
  padding-top: 80px ;


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
      grid-template-rows: repeat(4 , 1fr)
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
`

export const Hexagon = styled.div`
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  height: 140px ;
  width: 160px ;
  background: black ;
  display: flex;
  justify-content: center ;
  align-items: center ;
  color: white ;
  & > svg {
    transform: scale(3.5) ;
  }
`
