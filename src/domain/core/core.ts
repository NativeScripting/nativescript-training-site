export interface Map<T> {
    [key: string]: T;
}

export function defaultArray<T>(array: T[]): T[] {
    return array === undefined ? [] : array;
}
