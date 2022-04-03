package com.codegate.codegateapi

import org.springframework.stereotype.Service

interface ArticleService {
    fun allArticles(): List<Article>
    fun postArticle(article: ArticleRecord)
}

@Service
class DefaultArticleService(private val articleRepository: ArticleRepository) : ArticleService {
    override fun allArticles(): List<Article> {
        return articleRepository
            .findAll()
            .map {
                Article(
                    it.id,
                    it.title,
                    it.body
                )
            }
    }

    override fun postArticle(article: ArticleRecord) {
        articleRepository.save(article)
    }
}
