package com.codegate.codegateapi

class SpyArticleService: ArticleService {
    var allArticles_isCalled: Boolean = false
    override fun allArticles(): List<Article> {
        allArticles_isCalled = true
        return emptyList()
    }
}
