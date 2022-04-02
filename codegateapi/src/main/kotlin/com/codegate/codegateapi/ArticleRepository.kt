package com.codegate.codegateapi

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import javax.transaction.Transactional

@Repository
@Transactional
interface ArticleRepository: JpaRepository<Article, Int> {
    override fun findAll(): List<Article>
}
