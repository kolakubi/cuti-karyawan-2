import React, {Component} from 'react';
import AdminListKaryawan from '../component/AdminListKaryawan';

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
			if(data === "denied"){
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
				<div>
					<h1 style={{color: "white", fontSize: "50px", textAlign: "center", fontFamily: "sans-serif", fontWeight: "300", marginBottom: "30px"}}>Hallo {this.state.session}</h1>
					<AdminListKaryawan />
					<h4 style={{color: "white", textAlign: "center", fontFamily: "sans-serif", fontWeight: "300", marginBottom: "30px"}}>Click karyawan untuk menampilkan detail</h4>	
				</div>
				: <h1 style={{color: "white"}}>Fuck Off !!!</h1>
			}
			</div>
		);
	}
}

export default Admin;