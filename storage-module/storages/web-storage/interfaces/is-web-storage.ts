export interface IsWebStorage {
	saveToStorage(itemId: string, item: unknown): void;

	getFromStorage(itemId: string): any;

	removeFromStorage(itemId: string): void;

	clearStorage(): void;
}
