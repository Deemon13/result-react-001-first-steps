// imperative style
import logo from './logo.svg';
// imperative style
import './App.css';

// imperative style
export const App = () => {
	// declaration style
	const currentYear = new Date().getFullYear();
	// imperative style
	return (
		// all HTML elements - declaration style
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{currentYear}</p>
			</header>
		</div>
	);
};
