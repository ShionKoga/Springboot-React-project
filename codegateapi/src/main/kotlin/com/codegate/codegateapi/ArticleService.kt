package com.codegate.codegateapi

import org.springframework.stereotype.Service

interface ArticleService {
    fun allArticles(): List<Article>
}

@Service
class DefaultArticleService(private val articleRepository: ArticleRepository) : ArticleService {
    override fun allArticles(): List<Article> {
        return articleRepository.findAll()
    }
}
