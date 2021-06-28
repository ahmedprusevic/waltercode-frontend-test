import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export type NewsCardProps = {
	article: IArticle;
	index: number;
};

export default function NewsCard({ article, index }: NewsCardProps) {
	const classes = useStyles();

	const { title, urlToImage, description } = article;

	return (
		<Card className={classes.root}>
			<CardActionArea>
				{urlToImage && (
					<CardMedia
						component="img"
						alt={title}
						height="180"
						image={urlToImage}
						title={title}
					/>
				)}

				<CardContent>
					<Typography variant="h5" component="h4" className={classes.title}>
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Link<IArticle>
					to={{ pathname: `/article/${index}`, state: article }}
					className={classes.readMore}
				>
					Read More
				</Link>
			</CardActions>
		</Card>
	);
}

const useStyles = makeStyles({
	root: {
		maxWidth: 400,
		maxHeight: 450,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		margin: 20,
	},
	title: {
		fontSize: "1rem",
	},
	readMore: {
		textDecoration: "none",
		color: "#3f51b5",
		border: "1px solid #3f51b5",
		padding: "0.5rem",
		borderRadius: "0.25rem",
	},
});
