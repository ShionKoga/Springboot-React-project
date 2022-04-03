import {AppProps} from "../App";
import SpyStubArticleRepo from "./SpyStubArticlesRepo";
import {act} from "react-dom/test-utils";
import {render} from "@testing-library/react";
import AppNavigation from "../AppNavigation";


describe('AppNavigation', () => {
    let appProps: AppProps

    beforeEach(() => {
        const stubArticlesRepo = new SpyStubArticleRepo()
        stubArticlesRepo.allArticles_return_value = Promise.resolve([])
        appProps = {articleRepo: stubArticlesRepo}
    })

    test('appPropsを正しく渡している', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await render(
                <AppNavigation appProps={appProps}/>
            )
        })
    })
})