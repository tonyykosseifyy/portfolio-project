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
    padding: 0 3vw ;
    margin-top: ${(props) => props.marginTop || '140px'} ;
    & > img {
        max-height: 90vh ;
        object-fit: contain ;
        max-width: 90% ;
    }
`

export const Title = styled.h1`
    font-weight: bold ;
    color: black ;
    font-size: 3rem ;
    @media (max-width: 680px) {
        font-size: 2.5rem ;
    }
`

export const Paragraph = styled.p`
    max-width : ${(props) => props.maxWidth || '50%' } ;
    color: #243D46;
    font-size: 20px ;
    margin: ${(props) => props.margin || '30px'} 0 ;
    font-weight: 600 ;
    line-height: 30px ;
    @media (max-width : 1124px) {
        max-width: 90% ;
    }
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
    margin: ${(props) => props.margin || '0'} ;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 680px) {
        min-width: 70vw ;
    }
`
export const FlexWrapper = styled.section`
    display: flex ;
    align-items: center ;
    justify-content: space-around ;
    width: 100% ;
    margin-top: 80px ;
    @media (max-width: 680px) {
        flex-direction: column ;
    }
`

export const SmallWrapper = styled.div`
    display: flex ;
    flex-direction: column ;
    align-items : flex-start ;
    @media (max-width: 680px) {
        margin: 40px  0 ;
        width: 240px ;
    }
    & > h1 {
        font-weight: bold ;
        font-size: 5rem ;
        color: #01262F ;
        margin: 8px 0 ;
    }
    & > p {
        color: #868F96 ;
        font-size: 20px ;
        align-self: center ;
    }
`


export const InfoWrapper = styled.div`
    display: flex ;
    flex-direction: column ;
    flex: .5 ;
    & > h1 {
        font-weight: 700 ;
        font-size: 2.7rem ;
        color: #01262F ;
        margin: 15px 0 ;
    }
    & > p {
        font-size: 19px ;
        font-weight: 600 ;
        max-width: 80% ;
    }
    @media (max-width: 880px) {
        text-align: center ;
        align-items : center ; 
        margin: 60px 0 ;
        & > h1 {
            font-size: 2.3rem ;
        }
    }

`
export const Wrapper = styled.main`
    background-color: ${(props) => props.backgroundColor || 'white'} ;
    margin: ${(props) => props.margin} ;
    padding: ${(props) => !props.parent && '10vh 0'} ;
    & > img {
        min-width: 100% ;
    }
    & > img:nth-child(1) {
        transform: ${(props) => props.parent && 'translateY(20px)' } ;
    }
    & > img:nth-child(3) {
        transform: rotate(180deg) translateY(20px);
    }
    @media (max-width: 680px) {
        padding: 2vh 0 ;
    }
`

export const FlexContainer = styled.section`
    width: 100% ;
    display: flex ;
    justify-content: space-between ;
    padding: 3vh 7vw ;
    align-items: center ; 
    & > img {
        max-width: 40% ;
        object-fit: contain ;
        flex: .5 ;
    }
    @media (max-width: 880px) {
        flex-direction: column-reverse ;
        align-items: center ;
        padding: 4vh 0 ;
        & > img {
            max-width: 60% ;
        }
    }
`

