import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Home extends Component{
	render(){
		return(
			<h1>Home</h1>
		);
	}
}

class Contact extends Component{
	render(){
		return(
			<h1>Contact</h1>
		);
	}
}

class Family extends Component{

	componentWillMount(){
		console.log(this);
	}

	render(){
		return(
			<div>
				<h1>Family</h1>

				<ul>
					<li><Link to={`${this.props.match.url}/omar`}>Omar</Link></li>
					<li><Link to={`${this.props.match.url}/gamal`}>Gamal</Link></li>
					<li><Link to={`${this.props.match.url}/kania/2`}>Kania</Link></li>
				</ul>

				<Route path={`${this.props.match.url}/omar`} component={Omar}></Route>
				<Route path={`${this.props.match.url}/gamal`} component={Gamal}></Route>
				<Route path={`${this.props.match.url}/kania/:id`} component={Kania}></Route>
			</div>
		);
	}
}


class Omar extends Component{
	render(){
		return(
			<h1>Omar</h1>
		);
	}
}

class Gamal extends Component{
	render(){
		return(
			<h1>Gamal</h1>
		);
	}
}

class Kania extends Component{
	render(){
		return(
			<div>
				<h1>Kania</h1>
				<h3>Id nya adalah {this.props.match.params.id}</h3>
			</div>
		);
	}
}

class App extends Component{
	render(){
		return(
			<BrowserRouter>

				<div>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/contact'>Contact</Link></li>
						<li><Link to='/family'>Family</Link></li>
					</ul>

					<Route exact path='/' component={Home}></Route>
					<Route path='/contact' component={Contact}></Route>
					<Route path='/family' component={Family}></Route>
				</div>
				
			</BrowserRouter>
		);
	}
}

export default App