import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
	<SpeechProvider appId="70065d9b-eeac-42e8-819d-76a96fb16ff6" language="en-US">
		<Provider>
			<App />
		</Provider>
	</SpeechProvider>,
	document.getElementById('root')
);
