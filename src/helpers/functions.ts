export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

export function restFetch(endpoint: string, options?: RequestInit) {
  return fetch(endpoint, options).then((res) => res.json());
}
