import React, {Component} from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';

export class Header extends Component{
	render(){
		return(
			<BrowserRouter>

				<div>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</ul>
					
					
					<Route exact path={'/'} component={Home} activeStyle={{fontSize: '30px'}}/>
					<Route exact path={'/about'} component={About} />
					<Route exact path={'/contact'} component={Contact} />
					
					
				</div>
					
				</BrowserRouter>
			
		);
	}
}