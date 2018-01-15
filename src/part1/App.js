import React, {Component} from 'react'
import Piclist from './Piclist'
import './style.css'

class App extends Component{
	
	constructor(){
		super();
		this.state = {
			img1: 'https://d4n5pyzr6ibrc.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/4785B1C2-8734-405D-96DC23A6A32F256B/thul-90efb785-97af-5e51-94cf-503fc81b6940.jpg?response-content-disposition=inline',
			img2: 'http://www.our-happy-cat.com/images/cat-drinking-from-tap.jpg',
			img3: 'https://www.cats.org.uk/uploads/branches/1/environment-faqs.jpg',
			width: 250
		};
	}

	changeSize(lebar, perintah){
		let lebar2 = this.state.width;

		if(perintah=='tambah'){
			this.setState({width: lebar2+=lebar});
		}
		else{
			this.setState({width: lebar2-=lebar});
		}
		
		
	}

	render(){


		return(
			<div>
				<h1>Picture List list</h1>
				<div className="piclist-container">
					
					<Piclist changeSize={this.changeSize.bind(this)} img={this.state.img1} size={this.state.width}/>
					<Piclist changeSize={this.changeSize.bind(this)} img={this.state.img2} size={this.state.width}/>
					<Piclist changeSize={this.changeSize.bind(this)} img={this.state.img3} size={this.state.width}/>	
					
				</div>
			</div>
			
		);
	}
}

export default App