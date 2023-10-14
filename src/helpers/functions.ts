export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

export function restFetch(endpoint: string, options?: RequestInit) {
  return fetch(endpoint, options).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }

    return res.json();
  });
}
