import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {Login} from './pages/Login';
import {Admin} from './pages/Admin';

// style
import './css/style.css';

class App extends Component{


	render(){
		return(
			<div className="flex-center app-container">
				<BrowserRouter>
					<div>
						<Route exact path='/' component={Login}></Route>
						<Route path='/admin' component={Admin}></Route>
					</div>
					
				</BrowserRouter>
			</div>
			
		);
	}
}

export default App;