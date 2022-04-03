import Article from "./Article";
import {Http} from "./networking/NetworkHttp";

export default interface ArticlesRepo {
    allArticles(): Promise<Article[]>
}

export class NetworkArticlesRepo implements ArticlesRepo {
    private http: Http

    constructor(http: Http) {
        this.http = http
    }

    async allArticles(): Promise<Article[]> {
        return await this.http.get('/api/articles') as Article[]
    }
}