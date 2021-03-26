import React from 'react';
import clsx from 'clsx';
import { Drawer, Button, List, ListItem, Grid } from '@material-ui/core';
import './Header.css';
import { Link } from 'react-router-dom';
export default function TemporaryDrawer({ open, ToggleDrawer }) {
	const routes = ['men', 'bags', 'shoes', 'women', 'children'];
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
						{routes.map((i) => (
							//  {
							// console.log(i);
							<ListItem>
								<Link to={i} style={{ textDecoration: 'none' }}>
									<Button color="secondary">{i}</Button>
								</Link>
							</ListItem>
						))}
					</List>
				</Drawer>
			</Grid>
		</Grid>
	);
}
