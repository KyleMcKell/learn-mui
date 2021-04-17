import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Button,
	CardActions,
	CardActionArea,
	Divider,
} from "@material-ui/core";
import { brown } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: brown[100],
		alignItems: "stretch",
		height: "100%",
	},
	title: {
		display: "block",
		textOverflow: "ellipsis",
		wordWrap: "break-word",
		overflow: "hidden",
		minHeight: "3.6em",
		maxHeight: "3.6em",
		lineHeight: "1.8em",
		fontWeight: 500,
		color: brown[900],
	},
	price: {
		fontWeight: "bold",
		color: brown[600],
		fontSize: "2rem",
	},
	media: {
		height: 0,
		paddingTop: "56.25%",
		backgroundPosition: "top",
	},
	description: {
		marginTop: "1em",
		display: "block",
		textOverflow: "ellipsis",
		wordWrap: "break-word",
		overflow: "hidden",
		maxHeight: "3.6em",
		lineHeight: "1.8em",
		color: brown[900],
	},
	actions: {
		marginTop: 0,
		paddingTop: 0,
	},
	button: {
		marginBottom: 0,
		color: brown[900],
	},
}));

export default function DogToyCard(props) {
	const { title, price, description, imageUrl } = props;
	const classes = useStyles();
	const maxDescriptionLengthInWords = 10;

	const condensePhrase = (phrase, maxWords) => {
		const smallerPhrase = phrase
			.split(" ")
			.slice(0, maxWords + 1)
			.join(" ")
			.concat("...");

		return smallerPhrase;
	};

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={imageUrl}
					title={title}
					alt={title}
				/>
				<CardContent>
					<Typography variant="h5" className={classes.title}>
						{title}
					</Typography>
					<Typography className={classes.price}>${price}</Typography>
					<Divider />
					<Typography variant="subtitle1" className={classes.description}>
						{condensePhrase(description, maxDescriptionLengthInWords)}
						{/* {description} */}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.actions}>
				<Button className={classes.button}>Add To Cart</Button>
				<Button className={classes.button}>Buy Now</Button>
				<Button className={classes.button}>Learn More</Button>
			</CardActions>
		</Card>
	);
}
