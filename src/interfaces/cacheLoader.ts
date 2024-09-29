export interface ICacheLoader<T> {
    /**
     * Load a missing cache entry asynchronously.
     */
    load(key: string): Promise<T>;

    /**
     * Optionally load multiple cache entries at once.
     */
    loadMany?(keys: string[]): Promise<Map<string, T>>;
}
