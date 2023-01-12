import { AxiosRequestConfig } from "axios";

export const config: AxiosRequestConfig = {
	baseURL: 'https://my.api.mockaroo.com/',
	timeout: 30000,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Expose-Headers': 'Authorization',
	},
};