import { combineReducers } from "redux";
import topHeadlines from "./topHeadlines";
import searchArticles from "./search";

export default combineReducers({
	topHeadlines,
	searchArticles,
});
