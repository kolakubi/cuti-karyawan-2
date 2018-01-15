import React, {Component} from 'react';

class ErrorMessage extends Component{
	render(){
		return(
			<span style={{color: "red"}}>{this.props.message}</span>
		);
	}
}

export default ErrorMessage;