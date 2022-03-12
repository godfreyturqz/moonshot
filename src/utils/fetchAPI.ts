import axios, { AxiosRequestConfig, Method } from 'axios'

// for dev
const isCloudServer = false

export class FetchAPI {

    private API_BASE_URL: string
    private httpReqMethod: Method
    private id: string
    private objectData: object

    constructor(httpReqMethod: Method, id: string = '', objectData: object = {}){
        this.API_BASE_URL = isCloudServer ? 'https://***change this****.herokuapp.com/api/v1' : 'http://localhost:5000/api/v1'
        this.httpReqMethod = httpReqMethod
        this.id = id
        this.objectData = objectData
    }

    axiosRequest(APIRoute: string){
        const config = {
            url: `${this.API_BASE_URL}/${APIRoute}/${this.id}`,
            method: this.httpReqMethod,
            data: this.objectData
        }
        const response = axios.request(config)

        return response
    }

    toRecord = () => this.axiosRequest('record')
}