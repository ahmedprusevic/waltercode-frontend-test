import { makeStyles } from "@material-ui/core";
import React from "react";

export default function Loader() {
	const classes = useStyles();

	return (
		<div className={classes.loader}>
			<div className={classes.circle} />
			<div className={`${classes.circle} ${classes.b}`} />
			<div className={`${classes.circle} ${classes.c}`} />
		</div>
	);
}

const useStyles = makeStyles({
	loader: {
		width: "13rem",
		height: "5rem",
		margin: "5rem auto",
		display: "flex",
	},
	circle: {
		width: "2rem",
		height: "2rem",
		background: "black",
		borderRadius: "50%",
		animation: "$jump 1s linear infinite",
	},
	b: {
		animationDelay: "0.2s",
		marginLeft: "1rem",
	},
	c: {
		animationDelay: "0.4s",
		marginLeft: "1rem",
	},
	"@keyframes jump": {
		"0%": {
			marginTop: "0",
		},
		"35%": {
			marginTop: "-5rem",
		},
		"70%": {
			marginTop: "0",
		},
	},
});
