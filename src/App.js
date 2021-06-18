import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';


import './App.css';

function AppRouter() {
	return (
		<Switch>
			<Route exact path="/" component={Landing} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/dashboard" component={Home} />
			<Route
				exact
				path="/not-found"
				render={() => (
					<div>
						<h1>Not Found</h1>
						<p>The requested page could not be found</p>
					</div>
				)}
			/>
			<Redirect to="/not-found" />
		</Switch>
	);
}

function App() {
	return (
		<ChakraProvider>
			<Router>
				<AppRouter />
			</Router>
		</ChakraProvider>
	);
}

export default App;
