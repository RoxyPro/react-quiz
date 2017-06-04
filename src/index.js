import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Root component
const app = document.getElementById('app');

ReactDOM.render(<Home />, app);
registerServiceWorker();