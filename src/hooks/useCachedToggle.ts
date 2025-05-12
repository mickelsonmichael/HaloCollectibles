import { useEffect } from "react";
import useCache from "./useCached"
import useToggle from "./useToggle";

const useCachedToggle = (name: string, defaultState = false) => {
    const [get, set] = useCache<boolean>(name);

    const { isOn, ...rest } = useToggle(get() ?? defaultState);

    useEffect(() => {
        set(isOn);
    }, [isOn, set]);

    return { isOn, ...rest };
}

export default useCachedToggle;
