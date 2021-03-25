import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStateValue } from '../../StateProvider';
// import './Header.css';
import { CssTextField } from '../input/index';
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

export default function Header(props) {
	const classes = useStyles();
	const [{ basket }] = useStateValue();
	const [searchBool, setsearchBool] = useState(true);
	const [searchText, setSearchText] = useState('');
	const [toggleDrawer, settoggleDrawer] = useState(false);
	const showDrawer = () => {
		settoggleDrawer(!toggleDrawer);
	};

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

	const searchResults = (event) => {
		event.preventDefault();
		setsearchBool(!searchBool);
	};

	const handleSearchText = (event) => {
		setSearchText(event.target.value);
	};
	return (
		<div className="header">
			<AppBar position="fixed">
				{/* style={{ backgroundColor: '#333333', width: '100%' }} */}
				<Toolbar className={classes.title}>
					<Typography className="header_brand" variant="h6">
						<Link to="/" className="header_link">
							<Button>kanta</Button>
						</Link>
					</Typography>
					<div>
						{isMobile ? (
							<>
								<IconButton
									edge="start"
									className={classes.menuButton}
									color="inherit"
									aria-label="menu"
									onClick={showDrawer}
								>
									<MenuIcon className="menuIcon" color="secondary" />
								</IconButton>
								<TemporaryDrawer
									open={toggleDrawer}
									ToggleDrawer={showDrawer}
								/>
							</>
						) : (
							<>
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
											<Button color="secondary">Shoes</Button>
										</Link>
									</div>
									<div
										className="header_button"
										style={{ display: 'flex', textAlign: 'center' }}
									>
										{!searchBool && (
											<form onSubmit={searchResults}>
												<TextField onChange={handleSearchText} />
											</form>
										)}
										<Link to="/search">
											<Button>
												<SearchIcon color="secondary" />
											</Button>
										</Link>
									</div>
									<Link to="/cart" className="header_link">
										<div className="header_button">
											<Button>
												<LocalMallIcon color="secondary" />
												<sup style={{ fontSize: '10px' }}>
													{basket?.length > 0 && basket?.length}
												</sup>
											</Button>
										</div>
									</Link>
								</Typography>
							</>
						)}
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
