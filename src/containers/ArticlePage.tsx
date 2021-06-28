import React from "react";
import { Typography, Avatar } from "@material-ui/core";
import { useLocation } from "react-router";
import moment from "moment";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

export default function ArticlePage() {
	const article: IArticle = useLocation<IArticle>().state;

	const { urlToImage, title, author, publishedAt, content } = article;

	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.root}>
				{urlToImage && (
					<img src={urlToImage} alt={title} className={classes.image} />
				)}
				<div className={classes.content}>
					<Typography variant="h5" component="h4" className={classes.title}>
						{title}
					</Typography>
					<div className={classes.author}>
						<Avatar>{author && author[0]}</Avatar>
						<p>{author}</p>
						<p>{moment(publishedAt).format("L")}</p>
					</div>
					<hr className={classes.hr} />
					<div>
						<p>{content}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			width: "100%",
			backgroundColor: "#f5f5f5",
		},
		root: {
			maxWidth: "75rem",
			margin: "auto",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
		title: {
			fontSize: "2.5rem",
			marginTop: "1rem",
			[theme.breakpoints.down("sm")]: {
				fontSize: "1.5rem",
			},
		},
		image: {
			width: "56rem",
			marginTop: "1rem",
			[theme.breakpoints.down("sm")]: {
				width: "100%",
			},
		},
		content: {
			maxWidth: "50rem",
		},
		author: {
			display: "flex",
			marginTop: "1rem",
			alignItems: "center",
			"& p": {
				marginLeft: ".75rem",
			},
		},
		hr: {
			backgroundColor: "#fff",
			height: 1,
			margin: "1rem 0",
		},
	})
);
