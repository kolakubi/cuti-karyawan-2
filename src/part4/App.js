import React, {Component} from 'react'

class App extends Component{
	
	constructor(){
		super();
		this.state = {
			dj: []
		};
	}

	componentDidMount(){
		let ini = this;
		setTimeout(() =>{
			ini.setState({
				dj: [
						{
							name: 'Avicii',
							image: 'part4/avicii.jpg',
							url: 'https://www.youtube.com/user/AviciiOfficialVEVO'
						},
						{
							name: 'steve Aoki',
							image: 'part4/steve-aoki.jpg',
							url: 'https://www.youtube.com/user/steveaoki'
						}
					]
			})
		}, 1000)
	}

	addDj(){
		this.state.dj.push({
			name: 'steve Aoki',
			image: 'part4/steve-aoki.jpg',
			url: 'https://www.youtube.com/user/steveaoki'
		});
		let x = this.state.dj;
		this.setState({dj: x});
	}

	render(){
		return(
			<div>
				{this.state.dj[0] ? 
				<div className='playlist-container'>
					<p style={{width: '100%', textAlign: 'center'}}>
						<button onClick={this.addDj.bind(this)}>Add more</button>
					</p>
					{this.state.dj.map(
						(artis, index)=>
						<PlayList artis={artis} key={index} />
					)}
				</div>
				: <h1>Loading please wait...</h1>
			}
			</div>
			
			
		);
	}
}

class PlayList extends Component{
	render(){
		return(
			<div className='playList-class'>
				<p>
					<img className="dj-thumb-image" src={this.props.artis.image} alt={this.props.artis.name}/>
				</p>
				<h3>{this.props.artis.name}</h3>
				<p>
					<a href={this.props.artis.url} target="_blank">
						<img className="play-btn-image" src="part4/play-logo.png" alt="play button"/>
					</a>
				</p>
			</div>
		);
	}
}

export default App