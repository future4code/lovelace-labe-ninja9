import React from 'react'
import { Header } from '../Header/Header'
import styled from 'styled-components'
import { Menu } from './RegisterStyles'
import { H1 } from './RegisterStyles'
import { Input } from './RegisterStyles'
import { Select } from './RegisterStyles'
import { Label } from './RegisterStyles'
import axios from 'axios'

export class Register extends React.Component {

    render(){
        return <div>
            <Menu>
            <H1>Cadastro</H1>
            <Input
                placeholder='Título'
            />

            <Input
                placeholder='Descrição'
            />

            <Input
                type='number'
                placeholder='Preço'
            />

            <Label for="Formas de pagamento">Formas de pagamento</Label>
            <Select id='Formas de pagamento' name='Formas de pagamento'>

                <option >Cartão de Crédito</option>
                <option >Cartão de Débito</option>
                <option >Pix</option>
                <option >Paypal</option>
                <option >Boleto</option>

            </Select>

            <Input
                type='date'
            />

            <Input
                type='file'
            />
            </Menu>
             </div>
    }
}
