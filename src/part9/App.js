import React, {Component} from 'react';
import {getDataKarakter} from './ajax.js';

class App extends Component{

	constructor(){
		super();
		this.state = {
			karakter: {}
		}
	}
	
	componentDidMount(){
		getDataKarakter(this.state, this);
	}

	render(){
		return(
			<ul>
				{
					this.state.karakter.results ?
						this.state.karakter.results.map((karakter, index)=> 
							<Profile karakter={karakter} key={karakter.name}></Profile>
						)
					: <h1>Loading Data...</h1>
				}
			</ul>
		);
	}
}

class Profile extends Component{
	render(){
		return(
			
			<li style={{margin: '30px'}}>
				<h1>{this.props.karakter.name}</h1>
				<p>Kelamin: {this.props.karakter.gender}</p>
				<p>Tinggi: {this.props.karakter.height}</p>
				<p>Tanggal Lahir: {this.props.karakter.birth_year}</p>
				<p>Masa: {this.props.karakter.mass}</p>
			</li>

		);
	}
}

export default App;