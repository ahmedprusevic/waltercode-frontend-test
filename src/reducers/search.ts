import {
	EMPTY_ARTICLES,
	FETCHED_ALL_ARTICLES,
	GET_SEARCH_ARTICLES,
	INCREASE_PAGE_NUMBER_ARTICLES,
	SERATCH_ARTICLES_ERROR,
	SET_SORTING,
} from "../actions/types";

type SearchState = {
	searchArticles: IArticle[];
	pageNumber: number;
	loading: boolean;
	sortBy: "relevancy" | "popularity" | "publishedAt";
	fetchedAll: boolean;
};

const initialState: SearchState = {
	searchArticles: [],
	pageNumber: 1,
	loading: true,
	sortBy: "relevancy",
	fetchedAll: false,
};

export default function SearchReducer(
	state = initialState,
	action: Action<string, IArticle[] | string>
) {
	const { type, payload } = action;

	switch (type) {
		case GET_SEARCH_ARTICLES:
			return {
				...state,
				searchArticles: [...state.searchArticles, ...(payload! as IArticle[])],
				loading: false,
			};
		case SERATCH_ARTICLES_ERROR:
			return {
				...state,
				loading: false,
			};
		case INCREASE_PAGE_NUMBER_ARTICLES:
			return {
				...state,
				pageNumber: state.pageNumber + 1,
				loading: true,
			};
		case FETCHED_ALL_ARTICLES:
			return {
				...state,
				fetchedAll: true,
			};
		case SET_SORTING:
			return {
				...state,
				sortBy: payload as string,
				loading: true,
				pageNumber: 1,
				searchArticles: [],
			};
		case EMPTY_ARTICLES:
			return {
				...state,
				searchArticles: [],
				pageNumber: 1,
				sortBy: "relevancy",
			};
		default:
			return {
				...state,
			};
	}
}
