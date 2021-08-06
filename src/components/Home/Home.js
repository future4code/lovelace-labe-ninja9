import axios from 'axios'
import React from 'react'
import { keyframes } from 'styled-components'
import { baseURL } from '../constants/urls'
import { Header } from '../Header/Header'
import styled from 'styled-components'
import { Div } from './HomeStyles'
import { Services } from './HomeStyles'
import { HomeDiv } from './HomeStyles'




export default class ListJobs extends React.Component {
   state = {
    jobs: []
   }

     componentDidMount(){
     this.allJobs()
     }


     allJobs = (id) =>{
        axios.get (`${baseURL}/jobs`,{
            headers:{
                Authorization:"96452e69-b6ae-4bb7-ba8a-b66303c06a59"
            }
        })
        .then((res)=>{
        console.log(res.data)
         this.setState({jobs: res.data.jobs})
        })
        .catch((err)=>{
            console.log(err)
           alert("erro?",err)
        })



    }
    
    render() {
        const listJobs = this.state.jobs.map((user) => {
            return (
                <Services key={user.id}> 
                {user.jobs}
                <p>{user.title}</p>
                <p>Preço:{user.price}</p>
                <p>Disponibilidade do Serviço:{user.dueDate}</p>
                <button onClick={() => this.props.goToDetails(user.id)}> Ver Detalhes </button>
                <button onClick={''}>Adicionar ao Carrinho</button>
                </Services>

            )
        })
    
    
    return (
        <HomeDiv>
            <select>
             <option value=" Preço Crescente"> Preço Crescente</option>
       <option value="Preço Decrescente">Preço Decrescente</option>
                    <option value="Título">Título</option>
                    <option value="Prazo">Prazo</option>
                </select>
                <input type="number" placeholder="R$"
                        value={this.state.minWorth}
                        onChange={this.inputMinWorth}>
                    </input>
                    <input type="number" placeholder="R$"
                        value={this.state.maxWorth}
                        onChange={this.inputMaxWorth}
                    ></input>                    
        <Div>
            {listJobs}     
        </Div>

        </HomeDiv>
        
     )
   
  }


  

}
