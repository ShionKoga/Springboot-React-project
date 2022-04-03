import React, {useEffect, useState} from 'react';
import ArticlesRepo from "./NetworkArticlesRepo";
import Article from "./Article";

export interface AppProps {
    articleRepo: ArticlesRepo,
}

export default function App(props: AppProps) {
    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        props.articleRepo.allArticles().then(result => {
            setArticles(result)
        })
    }, [])

    return (
        <>
            <h1>Articles</h1>
            {articles.map(article =>
                (
                    <div id={article.id.toString()}>
                        <p>{article.title}</p>
                        <p>{article.body}</p>
                    </div>
                )
            )}
        </>
    );
}

