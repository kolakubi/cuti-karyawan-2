import React, {Component} from 'react';

// component
// import {Profil} from './component/Profil';
// import {Jam} from './component/Jam';
import {LoginForm} from '../component/LoginForm';

// fungsi
import * as AjaxFunction from '../method/ajax';
import * as UtilityFunction from '../method/utility';

// style
import '../css/style.css';

export class Login extends Component{

	constructor(){
		super();
		this.state = {
			jam: "",
			loginForm: {
				status: false,
				level: ""
			},
			buttonForm: true,
			loginStatus: ""
		}
	}
	
	componentDidMount(){
		UtilityFunction.jam(this);
	}

	chooseLevel = (level) => {
		this.setState({
			loginForm: {
				status: !this.state.loginForm.status,
				level: level
			},
			buttonForm: false
		})
	}

	loginFormState = () => {
		this.setState({
			buttonForm: true,
			loginForm: {
				status: false
			}
		})
	}

	validateLoginData(data){
		//data = {nik:... , password=...}
		// letak file php
		const url = "http://localhost:80/react/part10/login.php";
		
		// promise nunggu data dari ajax
		return AjaxFunction.login(this, data, url, this.state)
		.then(function(data){
			console.log(data);
			if(data === "sukses"){
				window.location.href = "/admin";
			}
			else{
				alert("Access Denied");
			}
		})
	}


	render(){
		return(
			<div className="flex-center app-container">
				<h1 className="jam">{this.state.jam}</h1>
				
				{
					this.state.buttonForm ? 
				
					<div className="flex-center button-navigasi-con">
						<button className="mal-button" onClick={() => this.chooseLevel("admin")}>Admin</button>
						<button className="mal-button" onClick={() => this.chooseLevel("karyawan")}>Karyawan</button>
					</div>
					: <div></div>
				}
				{
					this.state.loginForm.status ?
					<LoginForm level={this.state.loginForm.level} loginStatus={this.loginFormState.bind(this)} loginData={this.validateLoginData.bind(this)}/> 
					:
					<p style={{textAlign: "center", color: "white", fontFamily: "sans-serif"}}>Click untuk memilih jabatan anda</p>
				}
				
			</div>
			
		);
	}
}

export default Login;