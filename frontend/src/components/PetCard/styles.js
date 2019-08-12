import styled from 'styled-components'

export const Container = styled.div`
    width: 300px;
    height: 250px;
    background-color: #fff;
    box-shadow: rgba(79, 79, 79, 0.1) 0px 0.4rem 2rem 0px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    margin: 30px;
    background: url(${props => props.img});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 700px) {
        max-width: 100%;
        max-height: 80%;
    }
`

export const Details = styled.div`
    padding: 10px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-weight: bold;
    }

    img {
        width: 30px;
        height: 30px;
    }
`
