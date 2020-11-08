import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	TextField,
	Menu,
	MenuItem,
	IconButton,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import CancelIcon from '@material-ui/icons/Cancel';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStateValue } from '../../StateProvider';
import './Header.css';
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
	const { history } = props;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClick = (pageURL) => {
		history.push(pageURL);
		setAnchorEl(null);
	};
	console.log(basket);
	return (
		<div className="header" style={{ backgroundColor: '#fff' }}>
			<AppBar
				position="fixed"
				style={{ backgroundColor: '#333333', width: '100%' }}
			>
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
									onClick={handleMenu}
								>
									<MenuIcon style={{ color: '#adadad' }} />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={open}
									onClose={() => setAnchorEl(null)}
								>
									<MenuItem
										style={{ width: '100%', hieght: '15%' }}
										onClick={() => handleMenuClick('/women')}
									>
										<Button className="header_button">women</Button>
									</MenuItem>
									<MenuItem onClick={() => handleMenuClick('/men')}>
										<Button className="header_button">men</Button>
									</MenuItem>
									<MenuItem onClick={() => handleMenuClick('/children')}>
										<Button className="header_button">children</Button>
									</MenuItem>
									<MenuItem onClick={() => handleMenuClick('/bags')}>
										<Button className="header_button">bags</Button>
									</MenuItem>
									<MenuItem onClick={() => handleMenuClick('/shoes')}>
										<Button className="header_button">shoes</Button>
									</MenuItem>
									<MenuItem onClick={() => handleMenuClick}>
										{!searchBool && <CssTextField />}
										{/* {searchBool && (
		        <Button>
					<SearchIcon
						 style={{ color: '#adadad', borderBottomColor: '#adadad' }}
						 onClick={() => {
							 setsearchBool(!searchBool);
							 	}}
										/>
									</Button>
								)}					
								{!searchBool && (
									<Button>
										<CancelIcon
											style={{ color: '#adadad', borderBottomColor: '#adadad' }}
											onClick={() => {
												setsearchBool(!searchBool);
											}} */}
									</MenuItem>
								</Menu>
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
											<Button>Shoes</Button>
										</Link>
									</div>
									<div
										className="header_button"
										style={{ display: 'flex', textAlign: 'center' }}
									>
										{!searchBool && <CssTextField />}
										{searchBool && (
											<Button>
												<SearchIcon
													style={{
														color: '#adadad',
														borderBottomColor: '#adadad',
													}}
													onClick={() => {
														setsearchBool(!searchBool);
													}}
												/>
											</Button>
										)}
										{!searchBool && (
											<Button>
												<CancelIcon
													style={{
														color: '#adadad',
														borderBottomColor: '#adadad',
													}}
													onClick={() => {
														setsearchBool(!searchBool);
													}}
												/>
											</Button>
										)}
									</div>
									<Link to="/cart" className="header_link">
										<div className="header_button">
											<Button>
												<LocalMallIcon style={{ color: '#adadad' }} />
												<sup style={{ fontSize: '10px' }}>
													{basket.length > 0 && basket.length}
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
