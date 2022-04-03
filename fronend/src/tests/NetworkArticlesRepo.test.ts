import {NetworkArticlesRepo} from "../NetworkArticlesRepo";
import SpyStubHttp from "./networking/SpyStubHttp";


describe('NetworkArticlesRepo', () => {

    test('allArticles returns array of Articles', async () => {
        const stubHttp = new SpyStubHttp()
        stubHttp.get_return_value = Promise.resolve({
            id: 1,
            title: "title",
            body: "body"
        })
        const networkArticlesRepo = new NetworkArticlesRepo(stubHttp)


        const article = await networkArticlesRepo.allArticles()


        expect(article).toEqual({
            id: 1,
            title: "title",
            body: "body"
        })
    })

    test('allArticles passes correct argument to http', async () => {
        const spyHttp = new SpyStubHttp()
        const networkArticlesRepo = new NetworkArticlesRepo(spyHttp)


        await networkArticlesRepo.allArticles()


        expect(spyHttp.argument_get).toEqual('/api/articles')
    })

    test('postArticle passes correct argument to http', async () => {
        const spyHttp = new SpyStubHttp()
        const networkArticlesRepo = new NetworkArticlesRepo(spyHttp)


        await networkArticlesRepo.postArticle('sample title', 'sample body')


        const expectJson = {
            title: 'sample title',
            body: 'sample body'
        }
        expect(spyHttp.argument_post_url).toEqual('/api/articles')
        expect(spyHttp.argument_post_json).toEqual(expectJson)
    })
})