interface IArticle {
	source: {
		id?: string;
		name?: string;
	};
	author?: string;
	title: string;
	description: string;
	url?: string;
	urlToImage?: string;
	publishedAt?: string;
	content?: string;
}

interface ArticleResponse {
	articles: IArticle[];
	status: string;
	totalResults: number;
}
