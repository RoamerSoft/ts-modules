import { IsWebStorage } from '../interfaces/is-web-storage';

class LocalStorage implements IsWebStorage {
	private storage = localStorage;

	saveToStorage(itemId: string, item: unknown): void {
		this.storage.setItem(itemId, JSON.stringify(item));
	}

	getFromStorage(itemId: string): any {
		const item = this.storage.getItem(itemId);
		return item ? JSON.parse(item) : undefined;
	}

	removeFromStorage(itemId: string): void {
		this.storage.removeItem(itemId);
	}

	clearStorage(): void {
		this.storage.clear();
	}
}

export default new LocalStorage();
