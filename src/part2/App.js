import React, {Component} from 'react'

let aku = {
	nama: "Malmahsyar",
	playlist: 
		{
			namaplaylist: 'jepang',
			cover: 'http://i1.jpopasia.com/albums/1/1184-awake-za9s.jpg',
			daftarlagu: [
				{
					judullagu: 'hitomi no juunin',
					durasi: 120,
					genre: 'pop'

				},
				{
					judullagu: 'Ray',
					durasi: 140,
					genre: 'rock'

				},
				{
					judullagu: 'Nandemonaia',
					durasi: 90,
					genre: 'pop'

				},
			]
		},
	
}

class App extends Component{
	constructor(){
		super();
		this.state = {
			pengguna: {}
		}
	}

	componentDidMount(){
		let ini = this;
		setTimeout(() => {
			ini.setState({
				pengguna: aku
			});
			
		}, 1000)
	}

	render(){
		return(
			<div>
				<h1 className="judul">The Playlist</h1>
				{this.state.pengguna.nama ? 
					<div className="ThePlayList-con">
						<ThePlayList dataPengguna={this.state.pengguna}/>
						<ThePlayList dataPengguna={this.state.pengguna}/>
						<ThePlayList dataPengguna={this.state.pengguna}/>
						<ThePlayList dataPengguna={this.state.pengguna}/>
						<ThePlayList dataPengguna={this.state.pengguna}/>
					</div>
				: <h1>Loading</h1>
				}
			</div>
		);
	}
}

class ThePlayList extends Component{

	render(){
		
		let totalDurasi = this.props.dataPengguna.playlist.daftarlagu.reduce((total, lagu)=>{
			return total.concat(lagu.durasi);
		}, []);
		totalDurasi = totalDurasi.reduce((total, durasi)=>{
			return total + durasi;
		}, 0)
		console.log(totalDurasi);

		return(
			<div className="ThePlayList">
				<h1>{this.props.dataPengguna.nama}'s Playlist</h1>
				<h3>Jumlah Lagu: {this.props.dataPengguna.playlist.daftarlagu.length}</h3>
				<h4>Total Jam: {Math.round(totalDurasi/60)}</h4>
				<img src={this.props.dataPengguna.playlist.cover} alt=""/>
				<h3>{this.props.dataPengguna.playlist.namaplaylist}</h3>
				<DaftarLagu listlagu={this.props.dataPengguna.playlist.daftarlagu}/>
			</div>
		);
	}
}

class DaftarLagu extends Component{
	render(){
		return(
			<ul>
				{this.props.listlagu.map((value, index) => <li key={index}>{value.judullagu}</li>)}
			</ul>
		);
	}
}

export default App