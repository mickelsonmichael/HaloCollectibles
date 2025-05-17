"use client";

import { useEffect } from "react";
import useToggle from "@/hooks/useToggle";

const useCachedToggle = (name: string, defaultState = false) => {
    const { isOn, setIsOn, ...rest } = useToggle(defaultState);

    useEffect(() => {
        const cachedValue = localStorage.getItem(name);

        if (cachedValue) {
            setIsOn(JSON.parse(cachedValue));
        }
    }, [name, setIsOn])

    useEffect(() => {
        localStorage.setItem(name, JSON.stringify(isOn));
    }, [name, isOn]);

    return { isOn, setIsOn, ...rest };
}

export default useCachedToggle;
