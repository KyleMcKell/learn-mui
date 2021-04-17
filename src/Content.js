import React from "react";
import { Grid } from "@material-ui/core";

export default function Content() {
	return (
		<Grid container spacing={4}>
			<Grid item xs={12} sm={6} md={4}></Grid>
			<Grid item xs={12} sm={6} md={4}></Grid>
			<Grid item xs={12} sm={6} md={4}></Grid>
		</Grid>
	);
}
