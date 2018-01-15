import React, {Component} from 'react';

export class Profil extends Component{
	render(){
		return(
			
			<li style={{margin: '30px'}}>
				<h1>{this.props.karyawan.nik}</h1>
				<p>Nama: {this.props.karyawan.nama}</p>
				<p>Telpon: {this.props.karyawan.telp}</p>
				<p>Tanggal Lahir: {this.props.karyawan.tgllahir}</p>
				<p>Alamat: {this.props.karyawan.alamat}</p>
			</li>

		);
	}
}