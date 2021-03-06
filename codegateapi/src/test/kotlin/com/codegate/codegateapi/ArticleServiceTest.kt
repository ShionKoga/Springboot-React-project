package com.codegate.codegateapi

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.test.context.junit4.SpringRunner


@RunWith(SpringRunner::class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class ArticleServiceTest {
    @Autowired
    private lateinit var articleRepository: ArticleRepository

    private lateinit var articleService: DefaultArticleService

    @BeforeEach
    fun setUp() {
        articleService = DefaultArticleService(articleRepository)
    }

    @Test
    fun `ArticleService returns list of Articles`() {
        articleRepository.save(
            ArticleRecord(1, "title", "body")
        )


        val actual = articleService.allArticles()

        assertEquals("title", actual[0].title)
        assertEquals("body", actual[0].body)
    }

    @Test
    fun `post article can save record`() {
        val articleRecord = ArticleRecord(1, "title", "body")
        articleService.postArticle(articleRecord)


        val actualArticleRecord = articleRepository.findAll()
        assertTrue(actualArticleRecord.contains(articleRecord))
    }
}