import React, {ChangeEvent, useEffect, useState} from 'react';
import ArticlesRepo from "./NetworkArticlesRepo";
import Article from "./Article";

export interface AppProps {
    articleRepo: ArticlesRepo,
}

export default function App(props: AppProps) {
    const [articles, setArticles] = useState<Article[]>([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        props.articleRepo.allArticles().then(result => {
            setArticles(result)
        })
    }, [])

    const onChangeTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const onChangeBodyInput = (event: ChangeEvent<HTMLInputElement>) => {
        setBody(event.target.value)
    }

    const onSubmitForm = () => {
        props.articleRepo.postArticle(title, body)
    }

    return (
        <>
            <form role="search" onSubmit={onSubmitForm}>
                <label>
                    Title
                    <input type="text" onChange={onChangeTitleInput}/>
                </label>
                <label>
                    Body
                    <input type="text" onChange={onChangeBodyInput}/>
                </label>
                <button>Post</button>
            </form>
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

