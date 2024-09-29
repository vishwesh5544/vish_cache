import { IEvictionPolicy } from "interfaces";

export class LRUEvictionPolicy<T> implements IEvictionPolicy<T> {
    private accessOrder: Map<string, T> = new Map();

    /**
     * Evicts entries from the cache based on the LRU strategy.
     */
    evict(store: Map<string, T>, maxSize: number): void {
        while (store.size > maxSize) {
            const leastRecentlyUsedKey = this.accessOrder.keys().next().value;

            if (leastRecentlyUsedKey !== undefined) {
                store.delete(leastRecentlyUsedKey);
                this.accessOrder.delete(leastRecentlyUsedKey);
            }
        }
    }

    /**
     * Updates the access order whenever an entry is accessed.
     */
    onAccess(key: string, store: Map<string, T>): void {
        if (!store.has(key)) return; // Don't modify accessOrder if the key isn't in the store

        // Remove the old entry if it exists to reinsert it as most recently accessed
        if (this.accessOrder.has(key)) {
            this.accessOrder.delete(key);
        }

        // Add it back as the most recently accessed
        this.accessOrder.set(key, store.get(key)!);
    }
}
