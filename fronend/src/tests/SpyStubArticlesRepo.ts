import ArticlesRepo from "../NetworkArticlesRepo";
import Article from "../Article";

export default class SpyStubArticleRepo implements ArticlesRepo {
    allArticles_return_value: Promise<Article[]> = Promise.resolve([])
    allArticles(): Promise<Article[]> {
        return this.allArticles_return_value
    }

    postArticle_argument_title?: string = undefined
    postArticle_argument_body?: string = undefined
    postArticle(title: string, body: string): void {
        this.postArticle_argument_title = title
        this.postArticle_argument_body = body
    }
}