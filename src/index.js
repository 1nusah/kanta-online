import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './StateProvider';
import { initialState, reducer } from './reducer';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
const customTheme = createMuiTheme({
	overrides: {
		MuiFormLabel: {
			root: {
				color: '#adadad',
				'&$focused$notchedOutline': {
					borderColor: 'orange',
				},
			},
			color: '#fff',
		},
		MuiFocused: {
			borderColor: 'red',
		},
	},
});
ReactDOM.render(
	<React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
			<ThemeProvider theme={customTheme}>
				<App />
			</ThemeProvider>
		</StateProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
