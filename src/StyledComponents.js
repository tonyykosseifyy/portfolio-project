import styled from 'styled-components' ;


export const Navbar = styled.nav`
    display: flex;
    align-items: center ;
    color: white ;
    position: absolute ;
    top: 50px ;
    left: 45px ;
    z-index: 100 ;  
    transition: .3s ease-in-out ;
    @media (max-width : 880px) {
        background-color: ${(props) => props.open ? 'white' : 'transparent'} ;
        top: 0;
        justify-content: center;
        width: 100%;
        min-height: 60px;
        left: 0 ;
    }
`

export const LinkWrapper = styled.div`
    display: flex ;
    align-items: center ;
    margin-left: 40px ;
    margin-top: 2px ;
    transition: .3s ease-in-out ;
    @media (max-width: 880px) {
        margin-top: 0 ;
        position: absolute ;
        background-color: white ;
        top: 0 ;
        bottom: 0 ;
        right: 0 ;
        overflow: hidden ; 
        transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'} ;
        width: 80% ;
        color: black ;
        justify-content: space-evenly ;
        margin: 0 auto ;
        background-color: white ;
    }
`

export const Link = styled.a`
    color: inherit ;
    text-decoration: none ;
    display: block ;
    margin: 0 10px ;
    position: relative ;
    transition: .3s ease-in-out ;
    background: transparent ;
    padding: 3px 10px ;
    font-size: 14px ;
    @media (max-width: 880px) {
        font-weight: bold ;
        margin: 0  ;
    }
    &::before {
        content: '' ;
        position: absolute ;
        top: 0 ;
        bottom: 0 ;
        right: 0 ;
        left: auto ;
        background-color: white ;
        height: 150% ; 
        width: 0 ;
        transition: width .3s ease-in-out ;
        margin: auto 0 ;
        z-index: -1 ;
        @media (max-width: 880px) {
            background-color: black ;
        }
    }
    &:hover {
        color: black ;
        @media (max-width: 880px) {
            color: white ;
        }
    }
    &:hover::before {
        width : 100% ;
        left: 0 ;
        right: auto ;
    }

`

export const ShopNow = styled.div`
    margin-top: 30px ;
    font-weight: bold ;
    display: flex; 
    align-items: center ;
    width: 40% ;
    justify-content: space-between ;
    & > strong {
        letter-spacing: 10px ;
    }
`