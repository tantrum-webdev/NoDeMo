export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

export function isNotNil<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

export function fetcher<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  return fetch(endpoint, options)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res);
      }

      return res.json();
    })
    .catch((err) => {
      console.log('ERR', err);
    });
}
