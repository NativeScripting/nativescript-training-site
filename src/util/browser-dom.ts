export function withBrowserWindow<T>(doit: () => T) {
  if (typeof window !== 'undefined') {
    return doit();
  }
}
