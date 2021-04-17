import {
	Card,
	CardContent,
	CardHeader,
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
	},
	header: {
		margin: "1rem",
		height: "4rem",
		alignItems: "end",
		paddingTop: 0,
	},
	price: {
		marginLeft: "1rem",
		padding: "1rem",
		fontWeight: "bold",
		color: brown[800],
	},
	media: {
		height: 0,
		paddingTop: "56.25%",
		backgroundPosition: "top",
	},
	description: {
		// textOverflow: "ellipsis",
		// maxHeight: "6rem",
		whiteSpace: "break-spaces",
		overflow: "hidden",
	},
	button: {
		marginBottom: 0,
	},
}));

export default function DogToyCard(props) {
	const { title, price, description, imageUrl } = props;
	const classes = useStyles();
	// const maxDescriptionLengthInWords = 15;

	// const condensePhrase = (phrase, maxWords) => {
	// 	const smallerPhrase = phrase
	// 		.split(" ")
	// 		.slice(0, maxWords + 1)
	// 		.join(" ")
	// 		.concat("...");

	// 	return smallerPhrase;
	// };

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardHeader title={title} className={classes.header} />
				<Typography className={classes.price}>{price}</Typography>
				<CardMedia
					className={classes.media}
					image={imageUrl}
					title={title}
					alt={title}
				/>

				<CardContent>
					<Typography variant="subtitle1" className={classes.description}>
						{/* {condensePhrase(description, maxDescriptionLengthInWords)} */}
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button className={classes.button}>Add To Cart</Button>
				<Button className={classes.button}>Buy Now</Button>
				<Button className={classes.button}>Learn More</Button>
			</CardActions>
		</Card>
	);
}
