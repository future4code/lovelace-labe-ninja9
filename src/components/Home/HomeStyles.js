import styled from "styled-components"


export const Div = styled.div`
    padding-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
`

export const Services = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 80%;
    margin: auto;
    margin-bottom: 50px;
    height: 250px;


    p{
        text-align: center;
        font-size: 18px;
        margin-bottom: 25px;
    }

    button {
        display: flex;
        justify-content: space-around;
        margin: auto;
        margin-bottom: 5px;
    }

`

export const HomeDiv = styled.div`
    padding-top: 100px;
    text-align: center;
`