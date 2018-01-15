import React, {Component} from 'react';
import AdminListKaryawanItem from './AdminListKaryawanItem';

class AdminListKaryawan extends Component{

	constructor(){
		super();
		this.state = {
			detail: [
				{
					nik: 1,
					nama: "Malmahsyar",
					statusCuti: false
				},
				{
					nik: 2,
					nama: "Moammar Ghazally",
					statusCuti: true
				}
			]
		}
	}

	componentWillMount(){
		console.log("componentWillMount");
	}

	render(){
		return(
			<div className="AdminListKaryawan flex-center">
				{
					this.state.detail.map((karyawan, index)=>
						<AdminListKaryawanItem key={karyawan.nik} nik={karyawan.nik} nama={karyawan.nama} cuti={karyawan.statusCuti} />
					)
				}
			</div>
		);
	}
}

export default AdminListKaryawan;