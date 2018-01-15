import React, {Component} from 'react';

import * as AjaxFunction from '../method/ajax';

export class Admin extends Component{

	constructor(){
		super();
		this.state = {
			session: null
		}
	}

	componentWillMount(){
		let that = this;
		// cek session dari php server
		const urlSession = 'http://localhost:80/react/part10/cekSession.php'
		return AjaxFunction.cekSession(urlSession)
		.then(function(data){
			console.log("session "+data);
			// jika session ga ada, return denied
			if(data == "denied"){
				window.location.href = '/';
			}
			// jika ada, state nya langsung di set
			else{
				that.setState({
					session: data
				})
			}
		})
	}

	render(){
		return(
			<div>
			{
				this.state.session ? 
				<h1 style={{color: "white"}}>Hallo {this.state.session}</h1>
				: <h1 style={{color: "white"}}>Fuck Off !!!</h1>
			}
			</div>
		);
	}
}

export default Admin;