"use client";

const useCache = <T>(name: string): [() => T | null, (value: T) => void] => {
    const get = () => {
        const cachedValue = localStorage.getItem(name);

        return cachedValue != null ? JSON.parse(cachedValue) : null;
    }

    const set = (value: T) => localStorage.setItem(name, JSON.stringify(value));

    return [get, set];
}

export default useCache;