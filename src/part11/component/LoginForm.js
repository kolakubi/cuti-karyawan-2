import React from 'react';
import {Component} from 'react'
import ErrorMessage from './ErrorMessage';

export class LoginForm extends Component{

	constructor(){
		super();
		this.state = {
			errors: {}
		}
	}

	backToMenu(){
		this.props.loginStatus();
	}

	onSubmit = (e) => {
		e.preventDefault();
		// data login yg kita dapat
		const validate = this.validate();
		
		// set state data login
		this.setState({errors: validate});
		//this.refs.loginForm.reset();
		
		// jika data tidak kosong, return objek
		if(Object.keys(validate).length === 0){
			const nik = this.refs.inputNik.value;
			const password = this.refs.inputPassword.value;

			const loginData = {nik, password};

			this.props.loginData(loginData);
		}
	}

	validate = () => {
		var error = {};
		if(!this.refs.inputNik.value){
			error.nik = "nik salah";
		}
		if(!this.refs.inputPassword.value){
			error.password = "password salah"
		}
		return error;
	}

	render(){
		return(
			<div>
				<form ref="loginForm" className="flex-center mal-form">
					<h2 
						style={{width: "100%", 
						textAlign: "right", 
						color: "white", 
						fontFamily: "sans-serif", 
						cursor: "pointer"}} onClick={() => this.backToMenu()}
					>X</h2>
					<h3 style={{textAlign: "center", color: "white", fontFamily: "sans-serif"}}>Welcome {this.props.level}</h3>
					<input ref="inputNik" type="text" placeholder="NIK"/>
					{this.state.errors.nik && <ErrorMessage message={this.state.errors.nik} />}

					<input ref="inputPassword" type="password" placeholder="Password"/>
					{this.state.errors.password && <ErrorMessage message={this.state.errors.password} />}

					<button type="submit" className="mal-button" onClick={this.onSubmit}>Login</button>
				</form>
			</div>
			
		);
	}

}