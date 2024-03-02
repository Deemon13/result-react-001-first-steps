// imperative style
import { createElement } from 'react';
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
		// all elements - declaration style
		createElement(
			'div',
			{ className: 'App' },
			createElement(
				'header',
				{ className: 'App-header' },
				createElement('img', {
					src: logo,
					className: 'App-logo',
					alt: 'logo',
				}),
				createElement(
					'p',
					null,
					'Edit ',
					createElement('code', null, 'src/App.js'),
					' and save to reload.',
				),
				createElement(
					'a',
					{
						className: 'App-link',
						href: 'https://reactjs.org',
						target: '_blank',
						rel: 'noopener noreferrer',
					},
					'Learn React',
				),
				createElement('p', null, currentYear),
			),
		)
	);
};
