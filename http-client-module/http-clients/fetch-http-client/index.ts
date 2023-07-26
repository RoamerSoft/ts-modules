import { IsHttpClient } from '../interfaces/is-http-client';
import { IsHttpResponse } from '../interfaces/is-http-response';

class FetchHttpClient implements IsHttpClient {
	get(url: URL): Promise<IsHttpResponse> {
		return new Promise<IsHttpResponse>((resolve, reject) => {
			fetch(url, {
				method: 'GET',
				redirect: 'follow',
				headers: {
					Accept: 'application/json'
				}
			})
				.then(fetchResponse => fetchResponse)
				.then(async fullResponse => {
					const httpResponse: IsHttpResponse = {
						full: fullResponse,
						body: await fullResponse.json()
					};
					resolve(httpResponse);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	post(url: URL, body: any): Promise<IsHttpResponse> {
		return new Promise<IsHttpResponse>((resolve, reject) => {
			fetch(url, {
				method: 'POST',
				redirect: 'follow',
				headers: {
					Accept: 'application/json'
				},
				body: JSON.stringify(body)
			})
				.then(fetchResponse => fetchResponse)
				.then(async fullResponse => {
					const httpResponse: IsHttpResponse = {
						full: fullResponse,
						body: await fullResponse.json()
					};
					resolve(httpResponse);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	put(url: URL, body: any): Promise<IsHttpResponse> {
		return new Promise<IsHttpResponse>((resolve, reject) => {
			fetch(url, {
				method: 'PUT',
				redirect: 'follow',
				headers: {
					Accept: 'application/json'
				},
				body: JSON.stringify(body)
			})
				.then(fetchResponse => fetchResponse)
				.then(async fullResponse => {
					const httpResponse: IsHttpResponse = {
						full: fullResponse,
						body: await fullResponse.json()
					};
					resolve(httpResponse);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	patch(url: URL, body: any): Promise<IsHttpResponse> {
		return new Promise<IsHttpResponse>((resolve, reject) => {
			fetch(url, {
				method: 'PATCH',
				redirect: 'follow',
				headers: {
					Accept: 'application/json'
				},
				body: JSON.stringify(body)
			})
				.then(fetchResponse => fetchResponse)
				.then(async fullResponse => {
					const httpResponse: IsHttpResponse = {
						full: fullResponse,
						body: await fullResponse.json()
					};
					resolve(httpResponse);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	delete(url: URL): Promise<IsHttpResponse> {
		return new Promise<IsHttpResponse>((resolve, reject) => {
			fetch(url, {
				method: 'DELETE',
				redirect: 'follow',
				headers: {
					Accept: 'application/json'
				}
			})
				.then(fetchResponse => fetchResponse)
				.then(async fullResponse => {
					const httpResponse: IsHttpResponse = {
						full: fullResponse,
						body: await fullResponse.json()
					};
					resolve(httpResponse);
				})
				.catch(error => {
					reject(error);
				});
		});
	}
}

export default new FetchHttpClient();
