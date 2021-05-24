import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App.js';
import './index.css';
import './Header/Header.css';
import './Menu/Menu.css';
import './Main/Main.css';
import './Footer/Footer.css';

ReactDOM.render((
    <BrowserRouter>
	<App />
    </BrowserRouter>
), document.getElementById('root'));
