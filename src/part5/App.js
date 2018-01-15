import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import {Header} from './Header';
import {Footer} from './Footer'

class App extends Component{
	render(){
		return(
			<div>
				<div>
					<Header></Header>
				</div>

				
				<div>
					<Footer></Footer>
				</div>
			</div>
			
		);
	}
}

export default App;