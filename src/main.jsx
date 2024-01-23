import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';

import App from './App.jsx';

import './assets/styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <Router>
	<App />
	// </Router>
);
