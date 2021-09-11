import React from 'react';
import clsx from 'clsx';

import { Drawer, Button, List, ListItem, Grid } from '@material-ui/core';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
export default function TemporaryDrawer({ open, ToggleDrawer }) {
	const routes = ['men', 'bags', 'shoes', 'women', 'children'];
	const history = useHistory();
	const handleRouting = () => {
		ToggleDrawer();
	};
	return (
		<Grid container>
			<Grid item xs={12} sm={12} lg={12} md={12}>
				<Drawer
					anchor="top"
					open={open}
					variant="temporary"
					onClose={ToggleDrawer}
					style={{ width: '100%', height: '100%' }}
				>
					<List
						style={{
							width: '100%',
							backgroundColor: '#000',
							color: '#adadad',
							height: '100%',
						}}
					>
						{routes.map((i) => (
							<ListItem>
								<Link to={i} style={{ textDecoration: 'none' }}>
									<Button onClick={() => handleRouting()} color="secondary">
										{i}
									</Button>
								</Link>
							</ListItem>
						))}
					</List>
				</Drawer>
			</Grid>
		</Grid>
	);
}
