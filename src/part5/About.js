import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'

export class About extends Component{
	goHome(){
		BrowserRouter.push('/');
	}

	render(){
		return(
			<div>
				<h1>About</h1>
				<button onClick={this.goHome}>Go Home</button>
			</div>
		);
	}
}