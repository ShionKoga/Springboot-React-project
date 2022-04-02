package com.codegate.codegateapi

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

class ArticleServiceTest {

    @Test
    fun `ArticleService returns list of Articles`() {
        val stubArticleRepository = StubArticleRepository()
        val expected = listOf(
            Article(0, "hoge", "hogehoge")
        )
        stubArticleRepository.findAll_return_value = expected


        val actual = DefaultArticleService(stubArticleRepository)
            .allArticles()

        assertEquals(expected, actual)
    }
}