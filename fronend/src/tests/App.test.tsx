import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import App, {AppProps} from "../App"
import StubArticleRepo from "./StubArticlesRepo";
import {act} from "react-dom/test-utils";


describe('アプリ全体', () => {
    let appProps: AppProps

    beforeEach(() => {
        const stubArticleRepo = new StubArticleRepo()
        stubArticleRepo.allArticles_return_value = Promise.resolve([
            {id: 1, title: "title", body: "body"}
        ])
        appProps = {articleRepo: stubArticleRepo}
    })

    test('Articleの一覧が表示される', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await render(
                <App {...appProps}/>
            )
        })
        expect(screen.getByText("title")).toBeInTheDocument()
        expect(screen.getByText("body")).toBeInTheDocument()
    })
})