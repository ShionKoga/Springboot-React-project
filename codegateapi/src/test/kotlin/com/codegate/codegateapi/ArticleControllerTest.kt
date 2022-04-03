package com.codegate.codegateapi

import com.fasterxml.jackson.databind.ObjectMapper
import org.hamcrest.CoreMatchers.equalTo
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

class ArticleControllerTest {
    private lateinit var spyArticleService: SpyArticleService
    private lateinit var stubArticleService: StubArticleService

    @BeforeEach
    fun setUp() {
        spyArticleService = SpyArticleService()
        stubArticleService = StubArticleService()
    }

    @Test
    fun `api articles end point returns list of Articles`() {
        stubArticleService.allArticles_return_value = listOf(
            Article(0, "sample", "hello spring boot")
        )


        standaloneSetup(ArticleController(stubArticleService))
            .build()
            .perform(get("/api/articles"))


            .andExpect(status().isOk)
            .andExpect(jsonPath("$[0].id", equalTo(0)))
            .andExpect(jsonPath("$[0].title", equalTo("sample")))
            .andExpect(jsonPath("$[0].body", equalTo("hello spring boot")))
    }

    @Test
    fun `ArticleController passes correct argument to ArticleService`() {
        standaloneSetup(ArticleController(spyArticleService))
            .build()
            .perform(get("/api/articles"))


        assertEquals(spyArticleService.allArticles_isCalled, true)
    }

    @Test
    fun `post articles return ok`() {
        val articleRecord = ArticleRecord(1, "hoge", "hogehoge")
        val jsonOfArticleRecord = ObjectMapper().writeValueAsString(articleRecord)
        standaloneSetup(ArticleController(spyArticleService))
            .build()


            .perform(
                post("/api/articles")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(jsonOfArticleRecord)
            )


            .andExpect(status().isCreated)
    }

    @Test
    fun `post article passes article as argument to service`() {
        val articleRecord = ArticleRecord(1, "hoge", "hogehoge")
        val jsonOfArticleRecord = ObjectMapper().writeValueAsString(articleRecord)
        standaloneSetup(ArticleController(spyArticleService))
            .build()


            .perform(
                post("/api/articles")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(jsonOfArticleRecord)
            )


            assertEquals(articleRecord, spyArticleService.argument_postArticle)
    }
}