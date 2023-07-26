import AxiosHttpClient from './http-clients/axios-http-client';
import FetchHttpClient from './http-clients/fetch-http-client';

const defaultClient = AxiosHttpClient;

export { defaultClient as Http, AxiosHttpClient, FetchHttpClient };
