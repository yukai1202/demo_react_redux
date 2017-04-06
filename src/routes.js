import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import About from './components/About';
import Home from './components/Home';
export default (
	<Route path="/" component={App}>
		<IndexRoute component={About} />
		<Route path="home" component={Home} />
	</Route>
);
