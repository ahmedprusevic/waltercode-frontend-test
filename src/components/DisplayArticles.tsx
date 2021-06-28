import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import NewsCard from "./NewsCard";
import Loader from "./Loader";
import { useDispatch } from "react-redux";

export type DisplayArticlesProps = {
	articles: IArticle[];
	loading: boolean;
	increasePageNum: () => void;
	fetchedAll: boolean;
};

export default function DisplayArticles({
	articles,
	loading,
	increasePageNum,
	fetchedAll,
}: DisplayArticlesProps) {
	const classes = useStyles();
	const dispatch = useDispatch();

	return (
		<>
			<div className={classes.root}>
				{articles.map((article: IArticle, idx: number) => (
					<NewsCard
						article={article}
						key={`${article.publishedAt}${idx}`}
						index={idx}
					/>
				))}
			</div>
			{loading ? (
				<Loader />
			) : (
				<div className={classes.buttonDiv}>
					<Button
						variant="contained"
						color="primary"
						onClick={() => dispatch(increasePageNum())}
						disabled={fetchedAll}
					>
						Load More
					</Button>
				</div>
			)}
		</>
	);
}

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	buttonDiv: {
		margin: "1rem",
		display: "flex",
		justifyContent: "center",
	},
});
