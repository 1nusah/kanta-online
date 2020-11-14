import React from 'react';
import clsx from 'clsx';
import { Drawer, Button, List, ListItem, Grid } from '@material-ui/core';
import './Header.css';
import { Link } from 'react-router-dom';
export default function TemporaryDrawer({ open, ToggleDrawer }) {
	return (
		<Grid container>
			<Grid item xs={12} sm={12} lg={12} md={12}>
				<Drawer
					anchor="top"
					open={open}
					variant="temporary"
					onClose={ToggleDrawer}
					style={{ width: '100%' }}
				>
					<List
						style={{ width: '100%', backgroundColor: '#000', color: '#adadad' }}
					>
						<ListItem style={{ paddingBottom: 20 }}>
							<Link className="header_link">
								<Button color="inherit">men</Button>
							</Link>
						</ListItem>

						<ListItem style={{ paddingBottom: 20 }}>
							<Link className="header_link" to="/women">
								<Button color="inherit">women</Button>
							</Link>
						</ListItem>
						<ListItem style={{ paddingBottom: 20 }}>
							<Link className="header_link">
								<Button color="inherit">children</Button>
							</Link>
						</ListItem>
						<ListItem style={{ paddingBottom: 20 }}>
							<Link className="header_link">
								<Button color="inherit">bags</Button>
							</Link>
						</ListItem>
						<ListItem style={{ paddingBottom: 20 }}>
							<Link className="header_link">
								<Button color="inherit">shoes</Button>
							</Link>
						</ListItem>
					</List>
				</Drawer>
			</Grid>
		</Grid>
	);
}
