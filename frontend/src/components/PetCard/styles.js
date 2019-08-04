import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    background-color: #fff;

    @media screen and (max-width: 700px) {
        width: 100%;
    }

    img {
        max-width: 100%;
    }

    div {
        padding: 20px;
        display: flex;
        flex-direction: column;
    }
`;