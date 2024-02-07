import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { OnlineStore } from './online-store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<OnlineStore />
		</BrowserRouter>
	</React.StrictMode>,
);
