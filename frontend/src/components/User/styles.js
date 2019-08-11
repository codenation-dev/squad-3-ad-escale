import styled from 'styled-components'

export const Container = styled.div`
    width: calc(100% - 30px);
    max-width: 500px;
    background-color: #fff;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    padding: 10px;
    margin: 0 auto;
    margin-top: 15px;

    div {
        display: flex;
        flex-direction: column;
        margin: 15px 0;

        label {
            margin-bottom: 5px;
        }

        input {
            padding: 5px 10px;
            border-radius: 5px;
            border: 1px solid #cecece;
        }
    }

    .error, .success{
        color: #ff3333;
        margin-bottom: 15px;
        border: 1px solid #ff3333;
        padding: 10px;
        width: 100%;
        text-align: center;
    }

    .success {
        color: #0fc389;
        border: 1px solid #0fc389;
    }
`

export const Save = styled.button`
    padding: 10px 20px;
    color: #fff;
    border-radius: 5px;
    border: none;
    background-color: #0fc389;
    font-weight: bold;
    float: right;
    cursor: pointer;
`
