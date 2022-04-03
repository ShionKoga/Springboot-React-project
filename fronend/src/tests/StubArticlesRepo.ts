import ArticlesRepo from "../NetworkArticlesRepo";
import Article from "../Article";

export default class StubArticleRepo implements ArticlesRepo {
    allArticles_return_value: Promise<Article[]> = Promise.resolve([])
    allArticles(): Promise<Article[]> {
        return this.allArticles_return_value
    }
}