import React, {Component} from 'react';

class AdminListKaryawanItem extends Component{

	componentWillMount(){
		console.log(this.props);
	}

	goToDetail(nik){
		console.log(nik)
	}

	render(){
		let cutiColor = this.props.cuti ? "green" : "red";

		return(

			<div onClick={()=>this.goToDetail(this.props.nik)} className="flex-center standar-transition AdminListKaryawanItem">
				<h3>{this.props.nik} {this.props.nama} <span style={{height: "20px", width: "20px", backgroundColor: cutiColor, borderRadius: "50%", display: "inline-block"}}></span></h3>
			</div>
		);
	}
}

export default AdminListKaryawanItem;