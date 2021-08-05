import React from 'react'
import { Menu } from './RegisterStyles'
import { H1 } from './RegisterStyles'
import { Input } from './RegisterStyles'
import { Select } from './RegisterStyles'
import { Label } from './RegisterStyles'
import axios from 'axios'

export class Register extends React.Component {
    state = {
        title: "",
        description: "",
        price: "",
        dueDate: "",
        paymentMethods: []
    }

    inputTitle = (event) => {
        this.setState({ title: event.target.value })
    }

    inputDescription = (event) => {
        this.setState({ description: event.target.value })
    }

    inputPrice = (event) => {
        this.setState({ price: event.target.value })
    }

    inputDate = (event) => {
        this.setState({dueDate: event.target.value })
    }

    inputPaymentMethods = (event) => {
        let value = Array.from(event.target.selectedOptions, option => option.value)
        this.setState({ paymentMethods: value })
    }
		
    registerService = () => {
        const body = {
            title: this.state.title,
            description: this.state.description,
            price: Number(this.state.price),
            dueDate: this.state.dueDate,
            paymentMethods: this.state.paymentMethods,
        }

        axios.post("https://labeninjas.herokuapp.com/jobs", body, {
            headers: {
                Authorization: "96452e69-b6ae-4bb7-ba8a-b66303c06a59"
            }
        })
            .then(() => {
                alert('Cadastro realizado com sucesso! :)')
                this.setState({
                    title: "",
                    description: "",
                    price: "",
                    dueDate: "",
                    paymentMethods: []
                })
            })
            .catch(() => {
                alert('Ocorreu um erro inesperado, tente novamente! :(')
            })
    }

    render() {
        
        return <div>
            <Menu>
                <H1>Cadastro</H1>
                <Input
                    placeholder='Título'
                    value={this.state.title}
                    onChange={this.inputTitle}
                />

                <Input
                    placeholder='Descrição'
                    value={this.state.description}
                    onChange={this.inputDescription}
                />

                <Input
                    type='number'
                    placeholder='Preço'
                    value={this.state.price}
                    onChange={this.inputPrice}
                />

                <Label for="Formas de pagamento">Formas de pagamento</Label>
                <Select id="Formas de pagamento"
                    name='Formas de pagamento'
                    multiple value={this.state.paymentMethods}
                    onChange={this.inputPaymentMethods}
                >
                    <option >Cartão de Crédito</option>
                    <option >Cartão de Débito</option>
                    <option >Pix</option>
                    <option >Paypal</option>
                    <option >Boleto</option>
                </Select>

                <Input
                    type='date'
                    value={this.state.dueDate}
                    onChange={this.inputDate}
                />
{/* 
                <Input
                    type='file'
                /> */}

                <button onClick={this.registerService}>Cadastrar</button>
            </Menu>
        </div>
    }
}
