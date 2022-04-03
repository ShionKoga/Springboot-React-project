import {render, screen, within} from "@testing-library/react"
import '@testing-library/jest-dom'
import App, {AppProps} from "../App"
import SpyStubArticleRepo from "./SpyStubArticlesRepo";
import {act} from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";


describe('アプリ全体', () => {
    let appProps: AppProps
    let spyStubArticleRepo: SpyStubArticleRepo

    describe('入力フォーム', () => {
        beforeEach(() => {
            spyStubArticleRepo = new SpyStubArticleRepo()
            spyStubArticleRepo.allArticles_return_value = Promise.resolve([])
            appProps = {articleRepo: spyStubArticleRepo}
        })

        test('input要素と送信ボタンがある', async () => {
            await renderApplication(appProps)


            const formElement = screen.getByRole('search')
            expect(within(formElement).getByLabelText('Title')).toBeInTheDocument()
            expect(within(formElement).getByLabelText('Body')).toBeInTheDocument()
            expect(within(formElement).getByLabelText('Body')).toBeInTheDocument()
            expect(within(formElement).getByRole('button', {name: 'Post'})).toBeInTheDocument()
        })

        test('入力してボタンを押すとRepoが呼び出される', async () => {
            await renderApplication(appProps)
            const formElement = screen.getByRole('search')
            userEvent.type(within(formElement).getByLabelText('Title'), 'sample title')
            userEvent.type(within(formElement).getByLabelText('Body'), 'sample body')


            await clickButtonWithText('Post')


            expect(spyStubArticleRepo.postArticle_argument_title).toEqual('sample title')
            expect(spyStubArticleRepo.postArticle_argument_body).toEqual('sample body')
        })
    })

    describe('Article表示部分', function () {
        beforeEach(() => {
            const stubArticleRepo = new SpyStubArticleRepo()
            stubArticleRepo.allArticles_return_value = Promise.resolve([
                {id: 1, title: "title", body: "body"}
            ])
            appProps = {articleRepo: stubArticleRepo}
        })

        test('Articleの一覧が表示される', async () => {
            await renderApplication(appProps);


            expect(screen.getByText("title")).toBeInTheDocument()
            expect(screen.getByText("body")).toBeInTheDocument()
        })
    })

    async function clickButtonWithText(searchText: string) {
        userEvent.click(screen.getByText(searchText))
        await act(async () => {
            await new Promise(process.nextTick)
        })
    }

    async function renderApplication(props:AppProps) {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await render(
                <App {...props}/>
            )
        })
    }
})