import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { OnlineStore } from './online-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<OnlineStore />
		</Provider>
	</BrowserRouter>,
);
