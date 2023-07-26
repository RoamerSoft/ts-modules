import axios from 'axios';
import { IsHttpClient } from '../interfaces/is-http-client';
import { IsHttpResponse } from '../interfaces/is-http-response';

class AxiosHttpClient implements IsHttpClient {
	get(url: URL): Promise<IsHttpResponse> {
		return new Promise<IsHttpResponse>((resolve, reject) => {
			axios
				.get(url.href)
				.then(fullResponse => {
					const httpResponse: IsHttpResponse = {
						full: fullResponse,
						body: fullResponse.data
					};
					resolve(httpResponse);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	post(url: URL, body: any): Promise<any> {
		return new Promise<IsHttpResponse>((resolve, reject) => {
			axios
				.post(url.href, body)
				.then(fullResponse => {
					const httpResponse: IsHttpResponse = {
						full: fullResponse,
						body: fullResponse.data
					};
					resolve(httpResponse);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	put(url: URL, body: any): Promise<any> {
		return new Promise<IsHttpResponse>((resolve, reject) => {
			axios
				.put(url.href, body)
				.then(fullResponse => {
					const httpResponse: IsHttpResponse = {
						full: fullResponse,
						body: fullResponse.data
					};
					resolve(httpResponse);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	patch(url: URL, body: any): Promise<any> {
		return new Promise<IsHttpResponse>((resolve, reject) => {
			axios
				.patch(url.href, body)
				.then(fullResponse => {
					const httpResponse: IsHttpResponse = {
						full: fullResponse,
						body: fullResponse.data
					};
					resolve(httpResponse);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	delete(url: URL): Promise<any> {
		return new Promise<IsHttpResponse>((resolve, reject) => {
			axios
				.delete(url.href)
				.then(fullResponse => {
					const httpResponse: IsHttpResponse = {
						full: fullResponse,
						body: fullResponse.data
					};
					resolve(httpResponse);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	useInterceptor(interceptorFunction: any): void {
		// Add a request interceptor
		axios.interceptors.request.use(interceptorFunction);
	}
}

export default new AxiosHttpClient();
