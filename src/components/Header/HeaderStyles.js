import styled from 'styled-components'




export const HeaderProjeto = styled.div`
    height: 80px;
    display: flex;
    background-color: #615dfa;
    color: white;
    position: fixed;
    width: 100vw;
    justify-content: space-between;
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Titillium+Web:wght@900&display=swap');
  
`

export const ContainerHeader = styled.div`
    display: block;
    margin: 0;
`

export const FirstItemHeader = styled.div`
    display: flex;
    align-items: center;
   
    img {
        width: 50px;
        margin-right: 10px;
        margin-left: 20px;
    }

    h3 {
        margin-right: 40px;
        font-size: 25px;
        font-family: 'Titillium Web', sans-serif;
    }

    button {
        border: none;
        background: none;
        color: white;
        margin-right: 15px;
        font-size: 14px;
        font-family: 'Rajdhani', sans-serif;
        cursor: pointer;

        &:active{
            background-color:#8b88ff;
            border-radius: 5px;
        }
    }
`
export const Input = styled.input`
    display: flex;
    align-items: center;
    margin: auto;
    height: 65%;
    background-color: #4e4ac8;
    color: white;
    border: none;
    border-radius: 12px;
    padding-right: 60px;
    padding-left: 18px;
    width: 410px;
    outline: 0;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
    
   
    &:active{
        border: none;
    border-radius: 12px;
    }

    &:hover{
        border: none;
    border-radius: 12px;
    }

    ::placeholder {
        color: #8b88ff;
        font-weight: 700px;
        font-family: 'Roboto', sans-serif;
    }
`

export const SocialNetworks = styled.div`
    display: flex;
    align-items: center;
    width: 210px;
    img {
        width: 50px;
        position: relative;
        right: 50px;
        margin-left: 15px;
    }
`