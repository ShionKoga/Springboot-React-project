package com.codegate.codegateapi

import org.hamcrest.CoreMatchers.equalTo
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

class ArticleControllerTest {
    @Test
    fun `api articles end point returns list of Articles`() {
        val stubArticleService = StubArticleService()
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
        val spyArticleService = SpyArticleService()


        standaloneSetup(ArticleController(spyArticleService))
            .build()
            .perform(get("/api/articles"))


        assertEquals(spyArticleService.allArticles_isCalled, true)
    }
}