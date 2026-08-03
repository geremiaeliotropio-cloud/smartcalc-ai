function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function saveToStorage<T>(
  key: string,
  data: T
): void {
  if (!isBrowser()) {
    return;
  }

  localStorage.setItem(
    key,
    JSON.stringify(data)
  );
}

export function getFromStorage<T>(
  key: string
): T | null {
  if (!isBrowser()) {
    return null;
  }

  const saved = localStorage.getItem(key);

  if (!saved) {
    return null;
  }

  try {
    return JSON.parse(saved) as T;
  } catch {
    return null;
  }
}

export function clearFromStorage(
  key: string
): void {
  if (!isBrowser()) {
    return;
  }

  localStorage.removeItem(key);
}