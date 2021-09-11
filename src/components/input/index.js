import React from 'react';
import {
	fade,
	ThemeProvider,
	withStyles,
	makeStyles,
	createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';

export const CssTextField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: '#fff',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#adadad',
		},
		'& .MuiInputBase-input': {
			color: '#fff', // Text color
		},
		'& .MuiInput-underline:hover:before': {
			borderBottomColor: '#adadad', // Solid underline on hover
		},
	},
})(TextField);
