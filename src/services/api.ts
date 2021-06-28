import axios, { AxiosInstance, AxiosResponse } from "axios";

class Api {
	api: AxiosInstance;
	constructor() {
		this.api = axios.create({
			baseURL: "https://newsapi.org/v2",
			headers: {
				"X-Api-Key": process.env.REACT_APP_API_KEY,
			},
		});
	}

	getTopHeadlines = async (country: string, page: number) => {
		try {
			const res: AxiosResponse<ArticleResponse> = await this.api.get(
				"/top-headlines",
				{
					params: {
						country,
						page,
					},
				}
			);
			return res.data;
		} catch (err) {
			console.error(err);
		}
	};

	getSearchArticles = async (q: string, sortBy: string, page: number) => {
		try {
			const res: AxiosResponse<ArticleResponse> = await this.api.get(
				"/everything",
				{
					params: {
						q,
						sortBy,
						page,
					},
				}
			);
			return res.data;
		} catch (err) {
			console.error(err);
		}
	};
}

const api = new Api();

Object.freeze(api);

export default api;
