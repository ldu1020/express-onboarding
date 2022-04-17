type KeyRecord<T> = {
    [x in keyof T]: x;
};

export function getKeyRecord<T>(obj: T): KeyRecord<T> {
    const keys = Object.keys(obj) as (keyof T)[];
    const record = {} as KeyRecord<T>;
    for (const key of keys) record[key] = key;
    return record;
}
