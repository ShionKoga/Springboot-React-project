package com.codegate.codegateapi

import javax.persistence.*

@Entity
@Table(name = "articles")
data class ArticleRecord(
    @Id
    @GeneratedValue
    val id: Int,
    val title: String,
    val body: String,
)
