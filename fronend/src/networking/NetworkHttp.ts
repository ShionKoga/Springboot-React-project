import axios from "axios";

export interface Http {
    get(url: string): Promise<object>
    post(url: string, json: object): void
}


export default class NetworkHttp implements Http {
    private readonly serverUrl?: string;

    constructor() {
        this.serverUrl = process.env.REACT_APP_SERVER_URL
    }

    async get(url: string): Promise<object> {
        const response = await fetch(this.serverUrl + url)
        return Promise.resolve(response.json())
    }

    post(url: string, json: object): void {
        const requestUrl = this.serverUrl + url
        axios.post(requestUrl, json).then()
    }
}
