import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Header from "Header";
import Content from "Content";
import { brown } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: brown[50],
	},
}));

function App() {
	const classes = useStyles();

	return (
		<Grid container direction="column" className={classes.root}>
			<Grid item container>
				<Header />
			</Grid>
			<Grid item container>
				<Grid xs={1} />
				<Grid item xs={10}>
					<Content />
				</Grid>
				<Grid xs={1} />
			</Grid>
		</Grid>
	);
}

export default App;
