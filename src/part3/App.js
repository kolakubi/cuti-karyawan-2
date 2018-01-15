import React, {Component} from 'react'

class App extends Component{

	constructor(){
		super();
		this.state = {
			title: 'Let\'s Roll'
		}
	}

	gantiTitle(judulBaru){
		this.setState({
			title: judulBaru
		})
	}

	render(){
		return(
			<div>
				<h1>{this.state.title}</h1>
				<InputTitle ubahJudul={this.gantiTitle.bind(this)}></InputTitle>
			</div>
		);
	}
}

class InputTitle extends Component{
	gantiTitleLive(e){
		let inputJudul = e.target.value;
		this.props.ubahJudul(inputJudul)
	}

	render(){
		return(
			<input type="text" onChange={this.gantiTitleLive.bind(this)}/>
		);
	}
}

export default App