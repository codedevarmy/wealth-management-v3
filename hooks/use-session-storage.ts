'use client';

/**
 * A custom hook that retrieves data from session storage by a given key.
 *
 * @template T - The type of the data to be stored.
 * @param {string} key - The key under which the data is stored in session storage.
 * @returns value - The stored data or null if not found.
 */

export function useGetSessionStorage<T>(key: string): T | null {
  if (typeof window === 'undefined') {
    return null;
  }
  const storedValue = sessionStorage.getItem(key);
  return storedValue ? (JSON.parse(storedValue) as T) : null;
}
