import axios from 'axios'
import React from 'react'
import { baseURL } from '../constants/urls'


export class DetailJob extends React.Component {
    state = {
        jobs: []
    }

    componentDidMount() {
        this.getJobsId()
    }

    getJobsId = () => {
        axios.get(this.props.id,`${baseURL}/jobs/:id`,{
            headers:{
                Authorization:"96452e69-b6ae-4bb7-ba8a-b66303c06a59"
            }
        })
            .then((res) => this.setState({ jobs: res.jobs.id }))
            .catch((err) => console.log(err.response))
    }









    render() {
        console.log(this.state.jobs)
        return (
            <div key={this.state.jobs.id}>
            <p>Titulo{this.state.jobs.title}</p>
            <p>Método de Pagamento:{this.state.jobs.paymentMethods}</p>
            <p>Descrição{this.state.jobs.description}</p>
            <p>Preço{this.state.jobs.price}</p>
            <p>Data:{this.state.jobs.dueDate}</p>
            <button onClick ={this.props.goToList}>Voltar a Lista</button>
         </div>
        )
    }

}

