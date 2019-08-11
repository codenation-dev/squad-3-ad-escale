import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    overflow: scroll;
    flex-wrap: nowrap;
`

export const Image = styled.div`
    flex-shrink: 0;
    width: 300px;
    height: 250px;
    background-color: #fff;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    margin: 30px;
    background: url(${props => props.image});
    background-position: center;
    background-size: cover;
`
