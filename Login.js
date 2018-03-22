import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link,Button} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import EasyTransition from 'react-easy-transition'

class Login extends Component {
		
   
   render() {
      return (

      	<Router>
	         <div>
	            <h2>Login</h2>
				
				Username : <input type="text" name="username" id="username"/><br/>
				<br/>
				 Password : <input type="password" name="password" id="password"/><br/><br/>
				
				<button ><Link style={divStyle} to={'/Welcome'}>Home</Link></button>
				<Switch>
						<Route path='/Welcome' component={Welcome}/>
				</Switch>
				
	         </div>
         </Router>
      );
   }
}
var divStyle = {
  textDecorationLine: "",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
};
export default Login;