import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopHeadlines, increasePageNumber } from "../actions/topHeadlines";
import { DisplayArticles } from "../components";
import { RootState } from "../store";

export default function HomePage() {
	const { topHeadlines, loading, countryCode, pageNumber, fetchedAll } =
		useSelector((state: RootState) => state.topHeadlines);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTopHeadlines(countryCode, pageNumber));
	}, [dispatch, pageNumber, countryCode]);

	return (
		<DisplayArticles
			articles={topHeadlines}
			loading={loading}
			increasePageNum={increasePageNumber}
			fetchedAll={fetchedAll}
		/>
	);
}
