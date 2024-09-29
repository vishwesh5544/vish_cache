export interface ICacheEntry<T> {
    /**
     * The value being stored in the cache.
     */
    value: T;

    /**
     * Timestamp when the cache entry was created.
     */
    createdAt: number;

    /**
     * Optional timestamp when the cache entry expires.
     */
    expiresAt?: number;

    /**
     * Optional timestamp of when the cache entry was last accessed.
     * Useful for "expire after access" policies.
     */
    lastAccessedAt?: number;
}
