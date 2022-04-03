import Article from "./Article";

export default interface ArticlesRepo {
    allArticles(): Promise<Article[]>
}