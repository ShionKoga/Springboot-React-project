import NetworkHttp, {Http} from "../../networking/NetworkHttp";
import axios from "axios";


describe('NetworkHttp', () => {
    describe('get', () => {
        let networkHttp: Http

        beforeEach(() => {
            process.env.REACT_APP_SERVER_URL = 'http://server-name:9999'

            global.fetch = jest.fn(() =>
                Promise.resolve({
                    json: () => Promise.resolve([{test: '100'}]),
                }),
            ) as jest.Mock

            networkHttp = new NetworkHttp()
        })

        test('fetchに正しく引数を渡している', async () => {
            await networkHttp.get('/api/articles')


            expect(global.fetch).lastCalledWith('http://server-name:9999/api/articles')
        })

        test('fetchの返り値のJSONを返す', async () => {
            const responseJsonAsObject = await networkHttp.get('')


            expect(responseJsonAsObject).toEqual([{test: '100'}])
        })
    })

    describe('post', () => {
        let networkHttp: NetworkHttp
        let spyAxiosPost: jest.SpyInstance

        beforeEach(() => {
            networkHttp = new NetworkHttp()
            process.env.REACT_APP_SERVER_URL = 'http://server-name:9999'
            spyAxiosPost = jest.spyOn(axios, 'post')
        })

        test('axios.postに引数を渡して呼び出す', () => {
            const sendJson = {title: 'sample title', body: 'sample body'}
            networkHttp.post('/api/articles', sendJson)


            expect(spyAxiosPost).toHaveBeenCalledWith(
                'http://server-name:9999/api/articles',
                sendJson
            )
        })
    });
})
