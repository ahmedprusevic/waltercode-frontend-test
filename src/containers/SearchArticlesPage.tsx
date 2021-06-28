import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
	getSearchAricles,
	increasePageNumber,
	setSorting,
} from "../actions/search";
import { DisplayArticles } from "../components";
import { RootState } from "../store";
import { makeStyles, Checkbox, FormControlLabel } from "@material-ui/core";

export default function SearchPage() {
	const { loading, pageNumber, searchArticles, sortBy, fetchedAll } =
		useSelector((state: RootState) => state.searchArticles);

	const { query } = useParams<{ query: string }>();

	const dispatch = useDispatch();

	const classes = useStyles();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (sortBy !== e.target.name) {
			dispatch(setSorting(e.target.name));
		}
	};

	useEffect(() => {
		dispatch(getSearchAricles(query, sortBy, pageNumber));
	}, [dispatch, query, sortBy, pageNumber]);

	return (
		<>
			<div className={classes.nav}>
				<FormControlLabel
					control={
						<Checkbox
							checked={sortBy === "relevancy"}
							name="relevancy"
							color="primary"
							onChange={handleChange}
						/>
					}
					label="Relevancy"
				/>
				<FormControlLabel
					control={
						<Checkbox
							checked={sortBy === "publishedAt"}
							name="publishedAt"
							color="primary"
							onChange={handleChange}
						/>
					}
					label="Published At"
				/>
				<FormControlLabel
					control={
						<Checkbox
							checked={sortBy === "popularity"}
							name="popularity"
							color="primary"
							onChange={handleChange}
						/>
					}
					label="Popularity"
				/>
			</div>
			<DisplayArticles
				articles={searchArticles}
				loading={loading}
				increasePageNum={increasePageNumber}
				fetchedAll={fetchedAll}
			/>
		</>
	);
}

const useStyles = makeStyles({
	nav: {
		backgroundColor: "#dedede",
		display: "flex",
		justifyContent: "center",
	},
});
