// import axios from 'axios'
// import React from 'react'
// import { keyframes } from 'styled-components'
// import { baseURL } from '../constants/urls'
// import { Header } from '../Header/Header'


// export default class ListJobs extends React.Component {
//    state = {
//     jobs: []
//    }

//      componentDidMount(){
//      this.allJobs()
//      }


//      allJobs = (id) =>{
//         axios.get (`${baseURL}/jobs`,{
//             headers:{
//                 Authorization:"96452e69-b6ae-4bb7-ba8a-b66303c06a59"
//             }
//         })
//         .then((res)=>{
//         console.log(res.data)
//          this.setState({jobs: res.data.jobs})
//         })
//         .catch((err)=>{
//             console.log(err)
//            alert("erro?",err)
//         })



//     }
    
//     render() {
//         const listJobs = this.state.jobs.map((user) => {
//             return (
//                 <div key={user.id}> 
//                 <button onClick={() => this.props.goToDetails(user.id)}> Ver Detalhes </button>
//                 <button onClick={''}>Adicionar ao Carrinho</button>
//                 {user.jobs}
//                 <p>{user.title}</p>
//                 <p>Preço:{user.price}</p>
//                 <p>Disponibilidade do Serviço:{user.dueDate}</p>
//                 </div>

//             )
//         })
    
    
//     return (
//         <div>
//             {listJobs} 
       
//         </div>
           
//         )
        
    
           
        
    
//   }


  

// }
