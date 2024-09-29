export interface IEvictionPolicy<T> {
    /**
     * Evict entries from the cache based on the defined strategy (e.g., LRU).
     */
    evict(store: Map<string, T>, maxSize: number): void;

    /**
     * Update the eviction policy when an entry is accessed.
     * For LRU, this would update the "recency" of the entry.
     */
    onAccess(key: string, store: Map<string, T>): void;
}
