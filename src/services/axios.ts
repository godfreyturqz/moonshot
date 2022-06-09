import axios, { Method, AxiosResponse } from 'axios'

// CONFIG
const isLocalServer = true
const APIRoutes = {
	Record: 'record',
	SignIn: 'signin',
	SignOut: 'signout',
	RefreshToken: 'refresh',
}

export class APIService {
	private API_BASE_URL: string = isLocalServer
		? 'http://localhost:5000/api/v1'
		: 'https://yoursite.com/api/v1'

	constructor(
		private httpMethod: Method,
		private id: string = '',
		private objectData: object = {}
	) {
		this.httpMethod = httpMethod
		this.id = id
		this.objectData = objectData
	}

	private axiosRequest(url: string, accessToken?: string) {
		const config = {
			baseURL: this.API_BASE_URL,
			url: `${url}/${this.id}`,
			method: this.httpMethod,
			// data: { ...this.objectData, page: 1, limit: 2 },
			data: this.objectData,
			// data: { page: '1', limit: '2' },
			timeout: 3000,
			withCredentials: true,
			...(accessToken && {
				headers: { Authorization: `Bearer ${accessToken}` },
			}),
		}
		console.log('log@axios.ts', this.objectData)
		const response = axios.request(config)
		return response
	}

	record = (accessToken: string) =>
		this.axiosRequest(APIRoutes.Record, accessToken)

	signin = (): Promise<AxiosResponse<{ accessToken: string }>> =>
		this.axiosRequest(APIRoutes.SignIn)

	refreshToken = (): Promise<AxiosResponse<{ accessToken: string }>> =>
		this.axiosRequest(APIRoutes.RefreshToken)

	signout = () => this.axiosRequest(APIRoutes.SignOut)
}
