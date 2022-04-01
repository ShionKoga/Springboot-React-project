package com.codegate.codegateapi

import org.junit.jupiter.api.Test
import org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get

class ArticleControllerTest {
    @Test
    fun `api articles end point returns hello spring boot`() {
        standaloneSetup(ArticleController())
            .build()
            .perform(get("/api/articles"))
    }
}