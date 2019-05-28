import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './Containers/App';
import Settings from './Containers/Settings';
import Navbar from './Components/Navbar/Navbar';
import registerServiceWorker from './registerServiceWorker';
	
	console.log(process.env.PUBLIC_URL);

const routing = (
	<Router basename={process.env.PUBLIC_URL}>
		<div>
			<Navbar />
			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/vintool/settings/' component={Settings} />
			</Switch>
		</div>
	</Router>
	);

ReactDOM.render(
	routing,
	document.getElementById('root')
);

registerServiceWorker();
