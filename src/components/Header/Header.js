import React from 'react'
import { ContainerHeader } from './HeaderStyles'
import { HeaderProjeto } from './HeaderStyles'
import { FirstItemHeader } from './HeaderStyles'
import { Input } from './HeaderStyles'
import { SocialNetworks } from './HeaderStyles'

export class Header extends React.Component {

  render() {
    return (
      <ContainerHeader>
        <HeaderProjeto>
          <FirstItemHeader>
            <img src={'https://image.flaticon.com/icons/png/512/1163/1163217.png'} alt={'Logo'} />
            <h3>LABENINJA</h3>
           <button onClick={this.props.forHome} >Home</button> 
           <button onClick={this.props.forRegister} >Cadastrar</button> 
           <button onClick={this.props.forCart} >Carrinho</button> 
           
          </FirstItemHeader>
          <Input
            type="text"
            placeholder={'Pesquise um serviço'}     
            />
          <SocialNetworks>
            <img
              src="https://www.transparentpng.com/thumb/instagram-logo-icon/Fhoj1m-instagram-logo-icon-clipart.png"
              alt="Instagram" />

            <img
              src="https://img.icons8.com/cotton/2x/twitter.png"
              alt="Twitter" />
          </SocialNetworks>
        </HeaderProjeto>
      </ContainerHeader>
    )
  }
}
