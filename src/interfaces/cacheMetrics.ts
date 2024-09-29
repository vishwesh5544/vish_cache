export interface ICacheMetrics {
    /**
     * Number of cache hits.
     */
    hitCount: number;

    /**
     * Number of cache misses.
     */
    missCount: number;

    /**
     * Number of evictions that occurred.
     */
    evictionCount: number;

    /**
     * Number of successful cache loads from the loader.
     */
    loadSuccessCount: number;

    /**
     * Number of failed cache loads from the loader.
     */
    loadFailureCount: number;
}
