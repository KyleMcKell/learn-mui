import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
	appBar: {
		marginBottom: "1rem",
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
				<Typography className={classes.typographyStyles}>
					This is the header
				</Typography>
				<AcUnitRoundedIcon />
			</Toolbar>
		</AppBar>
	);
}
