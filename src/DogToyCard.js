import {
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100%",
	},
	media: {
		height: 0,
		paddingTop: "56.25%",
		backgroundPosition: "top",
	},
}));

export default function DogToyCard(props) {
	const { title, price, description, imageUrl } = props;
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader title={title} subheader={price} />
			<CardMedia
				className={classes.media}
				image={imageUrl}
				title={title}
				alt={title}
			/>
			<CardContent>
				<Typography>{description}</Typography>
			</CardContent>
		</Card>
	);
}
