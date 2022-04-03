package com.codegate.codegateapi

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/articles")
class ArticleController(private val articleService: ArticleService) {
    @GetMapping
    fun getAllArticles(): List<Article> {
        return articleService.allArticles()
    }

    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    fun postArticle(@RequestBody article: ArticleRecord) {
        articleService.postArticle(article)
    }
}
