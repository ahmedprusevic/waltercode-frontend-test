import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import {
	createStyles,
	fade,
	Theme,
	makeStyles,
} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { emptyOldArticles } from "../actions/topHeadlines";

export type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	const [searchText, setSearchText] = useState<string>("");
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();

	const handleSubmit = () => {
		if (searchText !== "") {
			history.push(`/search/${searchText}`);
		}
	};

	return (
		<div className={classes.root}>
			<div className={classes.nav}>
				<AppBar position="static">
					<Toolbar>
						<Typography className={classes.title} variant="h6" noWrap>
							<Link
								to="/"
								className={classes.logo}
								onClick={() => {
									setSearchText("");
									dispatch(emptyOldArticles());
								}}
							>
								News Portal
							</Link>
						</Typography>

						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								inputProps={{ "aria-label": "search" }}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setSearchText(e.target.value)
								}
								value={searchText}
							/>
						</div>
						<Button onClick={handleSubmit} className={classes.searchButton}>
							Search
						</Button>
					</Toolbar>
				</AppBar>
			</div>
			{children}
		</div>
	);
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: "100%",
			height: "100%",
		},
		nav: {
			flexGrow: 1,
		},
		title: {
			flexGrow: 1,
			display: "none",
			[theme.breakpoints.up("sm")]: {
				display: "block",
			},
		},
		logo: {
			textDecoration: "none",
			color: "#fff",
		},
		searchButton: {
			color: "#fff",
		},
		search: {
			position: "relative",
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.white, 0.15),
			"&:hover": {
				backgroundColor: fade(theme.palette.common.white, 0.25),
			},
			marginLeft: 0,
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				marginLeft: theme.spacing(1),
				width: "auto",
			},
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: "100%",
			position: "absolute",
			pointerEvents: "none",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		inputRoot: {
			color: "inherit",
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create("width"),
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				width: "12ch",
				"&:focus": {
					width: "20ch",
				},
			},
		},
	})
);
