import { IEvictionPolicy } from "interfaces";

export class LFUEvictionPolicy<T> implements IEvictionPolicy<T> {
    private accessFrequency: Map<string, number> = new Map();

    /**
     * Evicts entries from the cache based on the LFU strategy. The entry that has been accessed
     * the least number of times is removed when the cache exceeds the max size.
     */
    evict(store: Map<string, T>, maxSize: number): void {
        while (store.size > maxSize) {
            // Find the least frequently used key
            const leastFrequentlyUsedKey = Array.from(this.accessFrequency.entries())
                .reduce((leastUsed, current) =>
                    current[1] < leastUsed[1] ? current : leastUsed
                )[0];

            // Evict the least frequently used entry
            store.delete(leastFrequentlyUsedKey);
            this.accessFrequency.delete(leastFrequentlyUsedKey);
        }
    }

    /**
     * Updates the access frequency whenever an entry is accessed.
     */
    onAccess(key: string, store: Map<string, T>): void {
        if (!this.accessFrequency.has(key)) {
            this.accessFrequency.set(key, 1); // Initialize access count
        } else {
            this.accessFrequency.set(key, this.accessFrequency.get(key)! + 1); // Increment access count
        }
    }
}