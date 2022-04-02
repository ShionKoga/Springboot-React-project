package com.codegate.codegateapi

class StubArticleService: ArticleService {
    var allArticles_return_value: List<Article> = emptyList()
    override fun allArticles(): List<Article> {
        return allArticles_return_value
    }

}
