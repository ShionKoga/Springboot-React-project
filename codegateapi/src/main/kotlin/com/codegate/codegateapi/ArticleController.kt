package com.codegate.codegateapi

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/articles")
class ArticleController(private val articleService: ArticleService) {
    @GetMapping
    fun getAllArticles(): List<Article> {
        return articleService.allArticles()
    }
}
