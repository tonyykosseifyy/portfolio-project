import styled from 'styled-components' ; 


export const Navbar = styled.nav`
    display: flex ;
    align-items : center ; 
    justify-content: space-between ;
    padding: 8vh 5vw ;
    width: 100vw ;
    & > img {
        max-width: 400px ;
    }
    @media (max-width : 680px) {
        & > img {
            max-width: 200px ;
        }
    }
`

export const Button = styled.button`
    outline: none ;
    cursor: pointer ;
    border-radius: 15px ;
    color: #F949AF ;
    border: .5px solid #F949AF ;
    background-color: white ;
    padding: 9px 22px ;
    box-shadow: 3px 3px 5px #FFEEFB ;
    transition: .3s ease-in-out ;
    &:hover {
        box-shadow: 6px 6px 12px #FFEEFB ;
    }
`
export const Container = styled.section`
    display: flex ;
    flex-direction: column ;
    justify-content:center ;
    align-items: center ;
    width: 100vw ;
    text-align: center ;
    margin-top: ${(props) => props.marginTop || '140px'} ;
`

export const Title = styled.h1`
    font-weight: bold ;
    color: black ;
    font-size: 3rem ;
`

export const Paragraph = styled.p`
    max-width : ${(props) => props.maxWidth || '45%' } ;
    color: #243D46;
    font-size: 20px ;
    margin: 30px 0 ;
    font-weight: 600 ;
    line-height: 30px ;
`
export const MainButton = styled.button`
    background-color: #FD53C0 ;
    color: white ;
    border-radius: 70px; 
    box-shadow: 5px 5px 10px #E4E0EA ;
    cursor: pointer ; 
    outline: none ;
    border: none ;
    min-width: 370px ;
    padding: 23px 30px ;
    font-weight: bold ;
    font-size: 20px ;
    font-family: 'Poppins', sans-serif;

`