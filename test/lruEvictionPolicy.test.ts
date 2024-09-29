// test/lruEvictionPolicy.test.ts
import { LRUEvictionPolicy } from '../src/policies';

describe('LRU Eviction Policy', () => {
    let store: Map<string, string>;
    let lru: LRUEvictionPolicy<string>;

    beforeEach(() => {
        store = new Map();
        lru = new LRUEvictionPolicy<string>();
    });

    test('should evict the least recently used entry when the cache exceeds maxSize', () => {
        // Populate the cache
        store.set('a', 'valueA');
        store.set('b', 'valueB');
        store.set('c', 'valueC');

        // Mark 'a' and 'b' as recently used
        lru.onAccess('a', store);
        lru.onAccess('b', store);

        // Evict, cache size exceeds maxSize of 2
        lru.evict(store, 2);

        // 'c' should be evicted (least recently used)
        expect(store.has('c')).toBe(false); // 'c' was least recently used, so should be evicted
        expect(store.has('a')).toBe(true);  // 'a' should still be there
        expect(store.has('b')).toBe(true);  // 'b' should still be there
    });

    test('should keep the most recently used entries', () => {
        // Populate the cache
        store.set('a', 'valueA');
        store.set('b', 'valueB');
        store.set('c', 'valueC');

        // Access 'c' (making 'c' the most recently used)
        lru.onAccess('c', store);

        // Evict, cache size exceeds maxSize of 2
        lru.evict(store, 2);

        // 'a' should be evicted (least recently used)
        expect(store.has('a')).toBe(false); // 'a' was least recently used
        expect(store.has('c')).toBe(true);  // 'c' should still be there
        expect(store.has('b')).toBe(true);  // 'b' should still be there
    });
});
