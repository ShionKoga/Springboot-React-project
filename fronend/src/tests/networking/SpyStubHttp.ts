import {Http} from "../../networking/NetworkHttp";

export default class SpyStubHttp implements Http {
    get_return_value: Promise<object> = Promise.resolve({})
    argument_get?: string = undefined
    get(url: string): Promise<object> {
        this.argument_get = url
        return this.get_return_value
    }

    argument_post_url?: string = undefined
    argument_post_json?: object = undefined
    post(url: string, json: object): void {
        this.argument_post_url = url
        this.argument_post_json = json
    }
}