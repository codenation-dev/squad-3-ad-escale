import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 250px;
    background-color: #fff;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    border-radius: 20px;
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

    div {
        padding: 10px;
        position: absolute;
        bottom: 10px;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 20px;
        font-weight: bold;
        width: calc(100% - 20px);
        left: 10px;
        border: 1px solid #cecece;
        text-align: center;
    }
`;