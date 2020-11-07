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
			color: 'green',
			borderBottomColor: 'green',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'green',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'green',
				borderBottomColor: 'green',
			},
			'&:hover fieldset': {
				borderColor: 'green',
				borderBottomColor: 'green',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'green',
				borderBottomColor: 'green',
			},
		},
		'&input.Mui-focused': {
			borderBottomColor: 'green',
		},
	},
})(TextField);
