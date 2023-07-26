export interface IsHttpClient {
	get(url: URL): Promise<any>;

	post(url: URL, body: any): Promise<any>;

	put(url: URL, body: any): Promise<any>;

	patch(url: URL, body: any): Promise<any>;

	delete(url: URL): Promise<any>;
}
