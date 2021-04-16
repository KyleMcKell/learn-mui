import React from "react";
import { Grid } from "@material-ui/core";
import CoffeeCard from "CoffeeCard";

export default function Content() {
	return (
		<Grid container>
			<Grid item xs={4}>
				<CoffeeCard />
			</Grid>
			<Grid item xs={4}>
				<CoffeeCard />
			</Grid>
			<Grid item xs={4}>
				<CoffeeCard />
			</Grid>
		</Grid>
	);
}
