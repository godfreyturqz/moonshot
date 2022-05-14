import axios, { Method, AxiosResponse } from 'axios'

// for dev
const isLocalServer = true

export class APIService {
	private API_BASE_URL: string = isLocalServer
		? 'http://localhost:5000/api/v1'
		: 'https://yoursite.com/api/v1'

	constructor(
		private httpReqMethod: Method,
		private id: string = '',
		private objectData: object = {}
	) {
		this.httpReqMethod = httpReqMethod
		this.id = id
		this.objectData = objectData
	}

	private axiosRequest(url: string, accessToken?: string) {
		const config = {
			baseURL: this.API_BASE_URL,
			url: `${url}/${this.id}`,
			method: this.httpReqMethod,
			data: this.objectData,
			timeout: 3000,
			withCredentials: true,
			...(accessToken && {
				headers: { Authorization: `Bearer ${accessToken}` },
			}),
		}

		const response = axios.request(config)
		return response
	}

	record = (accessToken: string | undefined) =>
		this.axiosRequest('record', accessToken)

	signin = (): Promise<AxiosResponse<{ accessToken: string }>> =>
		this.axiosRequest('signin')

	refreshToken = (): Promise<AxiosResponse<{ accessToken: string }>> =>
		this.axiosRequest('refresh')
}
