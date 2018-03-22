import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

class App extends Component{
	render(){
		return(
			<Router>
				<div>
					<h2>ReactJS Example</h2>
					
					<ul>
						<li><Link to={'/Home'}>Home</Link></li>
						
						<li><Link to={'/Login'}>Login</Link></li>
					</ul>
					
					<Switch>
						<Route path='/Home' component={Home}/>
						<Route path='/Login' component={Login}/>
					</Switch>
					
					
				</div>
			</Router>
		)
	}

}
export default App;