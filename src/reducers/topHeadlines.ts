import {
	EMPTY_ARTICLES,
	FETCHED_ALL_HEADLINES,
	GET_TOP_HEADLINES,
	INCREASE_PAGE_NUMBER_HEADLINES,
	TOP_HEADLINES_ERROR,
} from "../actions/types";

type TopHeadlinesState = {
	topHeadlines: IArticle[];
	pageNumber: number;
	countryCode: string;
	loading: boolean;
	fetchedAll: boolean;
};

const initialState: TopHeadlinesState = {
	topHeadlines: [],
	pageNumber: 1,
	countryCode: "us",
	loading: true,
	fetchedAll: false,
};

export default function TopHeadlines(
	state = initialState,
	action: Action<string, IArticle[]>
) {
	const { type, payload } = action;

	switch (type) {
		case GET_TOP_HEADLINES:
			return {
				...state,
				topHeadlines: [...state.topHeadlines, ...payload!],
				loading: false,
			};
		case TOP_HEADLINES_ERROR:
			return {
				...state,
				loading: false,
			};
		case INCREASE_PAGE_NUMBER_HEADLINES:
			return {
				...state,
				loading: true,
				pageNumber: state.pageNumber + 1,
			};
		case FETCHED_ALL_HEADLINES:
			return {
				...state,
				fetchedAll: true,
			};
		case EMPTY_ARTICLES:
			return {
				...state,
				topHeadlines: [],
				pageNumber: 1,
				loading: true,
			};
		default:
			return {
				...state,
			};
	}
}
