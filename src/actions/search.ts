import { Dispatch } from "redux";
import api from "../services/api";
import {
	GET_SEARCH_ARTICLES,
	SERATCH_ARTICLES_ERROR,
	FETCHED_ALL_ARTICLES,
	INCREASE_PAGE_NUMBER_ARTICLES,
	SET_SORTING,
} from "./types";

export const getSearchAricles =
	(query: string, sortBy: string, pageNumber: number) =>
	async (dispatch: Dispatch<Action<string, IArticle[]>>) => {
		try {
			const res: ArticleResponse | undefined = await api.getSearchArticles(
				query,
				sortBy,
				pageNumber
			);

			if (res?.articles.length !== 20) {
				dispatch({ type: FETCHED_ALL_ARTICLES });
			}

			dispatch({
				type: GET_SEARCH_ARTICLES,
				payload: res?.articles,
			});
		} catch (err) {
			console.error(err);
			dispatch({
				type: SERATCH_ARTICLES_ERROR,
			});
		}
	};

export const increasePageNumber = () => (dispatch: Dispatch) => {
	dispatch({
		type: INCREASE_PAGE_NUMBER_ARTICLES,
	});
};

export const setSorting =
	(sorting: string) => (dispatch: Dispatch<Action<string, string>>) => {
		dispatch({
			type: SET_SORTING,
			payload: sorting,
		});
	};
