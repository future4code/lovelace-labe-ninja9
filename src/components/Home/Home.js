import axios from 'axios'
import React from 'react'
import { keyframes } from 'styled-components'
import { Header } from '../Header/Header'


export default class Home extends React.Component {
state = {
    details:'',
    backToList:"",
    jobs: [
      {
        id: "",
        title: "",
        description: "",
        price: Number,
        paymentMethods: [],
        dueDate: ""
      }]
    }

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
         this.setState({jobs: res.data})
        })
        .catch((err)=>{
            console.log(err)
           alert("erro?",err)
        })



    }
 
    render() {
        const listaUsuarios = this.state.jobs.map((user) => {
            return (
                <div key={user.id}>
                <h2> Lista de Serviços</h2>
                <p>Título:{user.title}</p>
               <p>Descrição:{user.descripition}</p>
               <p>Forma de Pagamento:{user.paymentMethods}</p>
              <p>Preço:{user.price}</p>
              <p>Disponibilidade do Serviço:{user.dueDate}</p>
                </div>
    
            )
        })
    
    
    return (
        {listaUsuarios}
    )
  }

    


}

