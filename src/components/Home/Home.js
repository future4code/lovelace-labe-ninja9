import axios from 'axios'
import React from 'react'
import { keyframes } from 'styled-components'
import { Header } from '../Header/Header'


export class Home extends React.Component {
state = {
    jobs: [],
    details: "",
    toCart:"",

    }


    O

 componentDidMount(){
     this.allJobs()
 }


     allJobs = () =>{
        axios.get ('https://labeninjas.herokuapp.com/jobs',{
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
                <div key={user.id}>
                <h2>Lista de Serviços{user.jobs}</h2>
                <p>Título:{user.title}</p>
               <p>Descrição:{user.description}</p>
               <p>Forma de Pagamento:{user.paymentMethods}</p>
              <p>Preço:{user.price}</p>
              <p>Disponibilidade do Serviço:{user.dueDate}</p>
                </div>
    
            )
        })
    
    
    return (
        // <button onClick={() => this.changePage("list")}>Voltar para a Lista</button>
        <div>{listJobs} </div>
           
        )
        
    
           
        
    
  }

    


}

