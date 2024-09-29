export interface IExpirationPolicy<T> {
    /**
     * Determines whether an entry has expired.
     */
    isExpired(entry: T, key: string, store: Map<string, T>): boolean;

    /**
     * Updates the expiration policy when an entry is accessed.
     * For "expire after access", this would update the last access time.
     */
    onAccess(key: string, store: Map<string, T>): void;

    /**
     * Optional method for refreshing entries before they expire.
     */
    refreshBeforeExpiry?(key: string, store: Map<string, T>): void;
}
