import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { renderRoutes } from './routes/routes';
const theme = createMuiTheme({
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: '#333333',
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		secondary: {
			// light: '#adadad',
			main: '#adadad',
			// dark: will be calculated from palette.secondary.main,
			// contrastText: '#ffcc00',
		},
	},
});
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Header />
				{renderRoutes}
				<Footer />
			</Router>
		</ThemeProvider>
	);
}

export default App;
