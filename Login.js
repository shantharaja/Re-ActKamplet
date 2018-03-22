import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
   render() {
      return (
         <div>
            <h2>Login</h2>
			
			Username : <input type="text" name="username" id="username"/><br/>
			<br/>
			Password : <input type="password" name="password" id="password"/><br/><br/>
			
			<button type="button">Login</button>
			
         </div>
      );
   }
}
export default Login;