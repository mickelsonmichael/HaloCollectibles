"use client";

import { useState } from "react";

const useToggle = (default_state = false) => {
    const [isOn, setIsOn] = useState(default_state);

    const on = () => setIsOn(true);
    const off = () => setIsOn(false);
    const toggle = () => setIsOn(b => !b);

    return {
        isOn,
        on,
        off,
        toggle,
        setIsOn
    }
}

export default useToggle;
