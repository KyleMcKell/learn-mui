import React from "react";
import { Grid } from "@material-ui/core";
import data from "data";
import DogToyCard from "DogToyCard";
import { v4 as uuidv4 } from "uuid";

export default function Content() {
	return (
		<Grid container spacing={2}>
			{data.map((toyObj) => {
				return (
					<Grid item xs={12} sm={6} md={4}>
						<DogToyCard {...toyObj} key={uuidv4()} />
					</Grid>
				);
			})}
		</Grid>
	);
}
