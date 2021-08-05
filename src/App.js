import React from 'react'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Register } from './components/Register/Register'
import { Cart } from './components/Cart/Cart'


class App extends React.Component {
	state = {
		currentScreen: 'home'
	}

	chooseScreen = () => {
		switch (this.state.currentScreen) {
			case 'home':
				return <Home
					forCart={this.forCart}
					forRegister={this.forRegister}
					forHome={this.forHome}
				/>
			case 'register':
				return <Register
					forCart={this.forCart}
					forRegister={this.forRegister}
					forHome={this.forHome}
				/>
			case 'cart':
				return <Cart
					forCart={this.forCart}
					forRegister={this.forRegister}
					forHome={this.forHome}
				/>
			default:
				return <h2>Erro! Página não encontrada :(</h2>
		}
	}
	forHome = () => {
		this.setState({ currentScreen: 'home' })
	}

	forRegister = () => {
		this.setState({ currentScreen: 'register' })
	}

	forCart = () => {
		this.setState({ currentScreen: 'cart' })
	}

	render() {
		return <div>
			<Header
				forCart={this.forCart}
				forRegister={this.forRegister}
				forHome={this.forHome}
				/>
				
				{this.chooseScreen()}

		</div>
		

	}
}

export default App
