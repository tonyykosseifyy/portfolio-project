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
  width: 100vw ;
  height: 100vh ;
  z-index: 100 ;
`
export const MainButton = styled.a`
  display: block ;
  color: white ;
  border: 2px solid white ;
  padding: 10px 30px ;
  font-weight: bold ;
  z-index: 100 ;
  margin: 30px 0 ;
`
