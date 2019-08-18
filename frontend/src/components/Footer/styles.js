import styled from 'styled-components'

export const Container = styled.div`
    position: sticky;
    top: 100vh;
    color: #fff;
    background-color: #444b54;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Pathway Gothic One', sans-serif;

    img {
        width: 35px;
        margin-right: 10px;
    }
`

export const Social = styled.div`
    a {
        color: #fff;
        text-decoration: none;
        margin-right: 10px;
        cursor: pointer
    }
`
