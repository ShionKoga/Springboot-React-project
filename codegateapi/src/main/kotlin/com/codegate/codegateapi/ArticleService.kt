package com.codegate.codegateapi

import org.springframework.stereotype.Service

interface ArticleService {
    fun allArticles(): List<Article>
}

@Service
class DefaultArticleService: ArticleService {
    override fun allArticles(): List<Article> {
        return emptyList()
    }
}
