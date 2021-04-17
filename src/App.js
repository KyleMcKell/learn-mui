import React from "react";
import { Grid } from "@material-ui/core";
import Header from "Header";
import Content from "Content";

function App() {
	return (
		<Grid container direction="column">
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
