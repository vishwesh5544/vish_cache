
# vish-cache

**vish-cache** is an advanced caching system for Node.js, inspired by Caffeine from the Java world. It provides highly configurable, efficient, and extensible caching strategies with features like TTL, eviction policies (LRU, LFU), asynchronous cache loading, and more.

## Features

- **Time-to-Live (TTL) expiration**: Set custom TTLs for cache entries.
- **Eviction Policies**: Supports multiple eviction strategies like Least Recently Used (LRU) and Least Frequently Used (LFU).
- **Async Cache Loading**: Automatically fetch missing cache entries from a loader (e.g., database or API).
- **Metrics and Statistics**: Track cache hit/miss rates, evictions, and other performance metrics.
- **Highly Configurable**: Easily plug in custom eviction and expiration policies.
- **Bulk Operations**: Set and get multiple cache entries at once.

## Installation

```bash
npm install vish-cache
```

Or with Yarn:

```bash
yarn add vish-cache
```

## Basic Usage

```typescript
import { Cache } from 'vish-cache';

const cache = new Cache<string>({
    ttl: 60000,  // 1 minute default expiration
    maxSize: 100,  // Max 100 entries before eviction
    evictionPolicy: 'LRU'  // Least Recently Used strategy
});

// Add an entry
cache.set('key', 'value');

// Get an entry
const value = cache.get('key');

// Remove an entry
cache.delete('key');

// Bulk operations
cache.setMany([{ key: 'key1', value: 'value1' }, { key: 'key2', value: 'value2' }]);
const results = cache.getMany(['key1', 'key2']);
```

## Configuration

The cache can be configured with various options:

- **ttl**: Time-to-live for cache entries.
- **maxSize**: Maximum number of entries before eviction.
- **evictionPolicy**: Strategy for evicting cache entries (e.g., LRU, LFU).
- **loader**: Asynchronous loader for fetching missing cache entries.
- **enableStatistics**: Enables cache hit/miss tracking and other metrics.

## Neovim Configuration

For those interested in my Neovim setup, feel free to check out my configuration repository:  
[Neovish Config](https://github.com/vishwesh5544/neovish)

## Contact

If you have any questions or suggestions, feel free to reach out:  
**vishweshshukla20@gmail.com**
