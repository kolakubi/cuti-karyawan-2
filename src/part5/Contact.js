import React, {Component} from 'react';

export class Contact extends Component{
	componentWillMount(){
		console.log('componentWillMount');
		console.log(this.props.params);
	}
	render(){
		return(
			<h1>Contact</h1>
		);
	}
}
