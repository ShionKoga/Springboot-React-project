package com.codegate.codegateapi

import org.junit.jupiter.api.Test
import org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

class ArticleControllerTest {
    @Test
    fun `api articles end point returns something`() {
        standaloneSetup(ArticleController())
            .build()
            .perform(get("/api/articles"))
            .andExpect(status().isOk)
    }
}