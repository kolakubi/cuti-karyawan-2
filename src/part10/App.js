import React, {Component} from 'react';
import * as AjaxFunction from './ajax.js';
import {Profil} from './Profil';
import {Jam} from './Jam';

class App extends Component{

	constructor(){
		super();
		this.state = {
			karyawan: [],
			jam: ""
		}
	}
	
	componentDidMount(){
		//AjaxFunction.getDataKarakter(this.state, this);
		//AjaxFunction.login(1, this, {nik: 1, password: 'admin'});
		AjaxFunction.jam(this);
	}


	render(){
		return(
			<div className="">
				<h1>{this.state.jam}</h1>
			</div>
			
		);
	}
}

export default App;