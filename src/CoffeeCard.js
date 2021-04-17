import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import { Avatar, IconButton } from "@material-ui/core";

const useStyles = makeStyles({
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function CoffeeCard(props) {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
	const { avatarSrc, title, subtitle, description, imgSrc } = props;

	return (
		<Card>
			<CardHeader
				avatar={<Avatar src={avatarSrc} />}
				action={
					<IconButton aria-label="settings">
						<ShareIcon />
					</IconButton>
				}
				title={title}
				subheader={subtitle}
			/>
			<CardContent>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					Word of the Day
				</Typography>
				<Typography variant="h5" component="h2">
					be{bull}nev{bull}o{bull}lent
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					adjective
				</Typography>
				<Typography variant="body2" component="p">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}
