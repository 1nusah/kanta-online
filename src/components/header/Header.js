import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import TextField from '@material-ui/core/TextField';
import './Header.css';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		zIndex: 0,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function Header() {
	const classes = useStyles();

	return (
		<div className="header" style={{ backgroundColor: '#fff' }}>
			<AppBar position="fixed" style={{ backgroundColor: '#333333' }}>
				<Toolbar className={classes.title}>
					<Typography className="header_brand" variant="h6">
						<Link to="/" className="header_link">
							<Button>kanta</Button>
						</Link>
					</Typography>
					<Typography variant="h5" className="header_row">
						<Link className="header_link" to="/women">
							<div className="header_button">
								<Button>Women</Button>
							</div>
						</Link>
						<div className="header_button">
							<Link className="header_link" to="/men">
								<Button>Men</Button>
							</Link>
						</div>
						<div className="header_button">
							<Link className="header_link" to="/children">
								<Button>Children</Button>
							</Link>
						</div>
						<div className="header_button">
							<Link className="header_link" to="/bags">
								<Button>Bags</Button>
							</Link>
						</div>
						<div className="header_button">
							<Link className="header_link" to="/shoes">
								<Button>Shoes</Button>
							</Link>
						</div>
						<div
							className="header_button"
							style={{ display: 'flex', textAlign: 'center' }}
						>
							<TextField />
							<SearchIcon
								style={{ color: '#adadad', borderBottomColor: '#adadad' }}
							/>
						</div>
						<Link to="/checkout" className="header_link">
							<div className="header_button">
								<LocalMallIcon style={{ color: '#adadad' }} />
								<sup style={{ fontSize: '10px' }}>0</sup>
							</div>
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
