import axios, { Method, AxiosResponse } from 'axios'

// CONFIG
const isLocalServer = true
const APIRoutes = {
	Record: 'record',
	SignIn: 'signin',
	SignOut: 'signout',
	RefreshToken: 'refresh',
}

type Options = {
	id?: string
	payload?: object
}

export class APIService {
	private API_BASE_URL: string = isLocalServer
		? 'http://localhost:5000/api/v1'
		: 'https://yoursite.com/api/v1'
	private id: string
	private payload: object

	constructor(private httpMethod: Method, options: Options = {}) {
		this.id = options.id || ''
		this.payload = options.payload || {}
	}

	private axiosRequest(
		url: string,
		accessToken?: string,
		page?: number,
		limit?: number
	) {
		const config = {
			baseURL: this.API_BASE_URL,
			url: `${url}/${this.id}?page=${page}&limit=${limit}`,
			method: this.httpMethod,
			data: this.payload,
			timeout: 3000,
			withCredentials: true,
			...(accessToken && {
				headers: { Authorization: `Bearer ${accessToken}` },
			}),
		}
		const response = axios.request(config)
		return response
	}

	record = (accessToken: string, page?: number, limit?: number) =>
		this.axiosRequest(APIRoutes.Record, accessToken, page, limit)

	signin = (): Promise<AxiosResponse<{ accessToken: string }>> =>
		this.axiosRequest(APIRoutes.SignIn)

	refreshToken = (): Promise<AxiosResponse<{ accessToken: string }>> =>
		this.axiosRequest(APIRoutes.RefreshToken)

	signout = () => this.axiosRequest(APIRoutes.SignOut)
}
