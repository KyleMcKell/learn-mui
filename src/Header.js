import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import PetsIcon from "@material-ui/icons/Pets";
import { makeStyles } from "@material-ui/styles";
import brown from "@material-ui/core/colors/brown";

const useStyles = makeStyles(() => ({
	appBar: {
		marginBottom: "1rem",
		backgroundColor: brown[500],
	},
	typographyStyles: {
		flex: 1,
	},
}));

export default function Header() {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.appBar}>
			<Toolbar>
				<Typography variant="h4" className={classes.typographyStyles}>
					Fun Dog Toys
				</Typography>
				<PetsIcon />
			</Toolbar>
		</AppBar>
	);
}
