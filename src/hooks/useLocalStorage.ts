import { useState } from "react";
import { LocalStorageValue } from "@utils/interfaces";

export default function useLocalStorage<T>({
    key,
    initialValue,
}: LocalStorageValue<T>): [T, (value: T) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: T) => {
        try {
            const valueToStore =
                value instanceof Function
                    ? (value as (prevState: T) => T)(storedValue)
                    : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
}
