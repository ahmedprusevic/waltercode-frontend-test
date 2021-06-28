import { Dispatch } from "redux";
import api from "../services/api";
import {
	GET_TOP_HEADLINES,
	TOP_HEADLINES_ERROR,
	FETCHED_ALL_HEADLINES,
	INCREASE_PAGE_NUMBER_HEADLINES,
	EMPTY_ARTICLES,
} from "./types";

export const getTopHeadlines =
	(country: string, page: number) =>
	async (dispatch: Dispatch<Action<string, IArticle[]>>) => {
		try {
			const res: ArticleResponse | undefined = await api.getTopHeadlines(
				country,
				page
			);

			if (res?.articles.length !== 20) {
				dispatch({ type: FETCHED_ALL_HEADLINES });
			}

			dispatch({
				type: GET_TOP_HEADLINES,
				payload: res?.articles,
			});
		} catch (err) {
			console.error(err);
			dispatch({
				type: TOP_HEADLINES_ERROR,
			});
		}
	};

export const increasePageNumber = () => (dispatch: Dispatch) => {
	dispatch({
		type: INCREASE_PAGE_NUMBER_HEADLINES,
	});
};

export const emptyOldArticles = () => (dispatch: Dispatch) => {
	dispatch({
		type: EMPTY_ARTICLES,
	});
};
