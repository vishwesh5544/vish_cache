import { ICacheLoader, IEvictionPolicy, IExpirationPolicy } from "./index";

export interface ICacheConfig<T> {
    /**
     * Default time-to-live (TTL) for cache entries (in milliseconds).
     */
    defaultTtl?: number;

    /**
     * Maximum size of the cache. When the cache exceeds this size,
     * entries will be evicted based on the eviction policy.
     */
    maxSize?: number;

    /**
     * Strategy for evicting cache entries when maxSize is exceeded.
     */
    evictionPolicy?: IEvictionPolicy<T>;

    /**
     * Strategy for expiring cache entries.
     */
    expirationPolicy?: IExpirationPolicy<T>;

    /**
     * Async loader for populating missing cache entries.
     */
    loader?: ICacheLoader<T>;

    /**
     * Whether to enable cache statistics (e.g., hit/miss count, evictions).
     */
    enableStatistics?: boolean;
}
