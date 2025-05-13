const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const waitFor = async (condition = () => false, onTimeout = () => { }, timeout = 360_000) => {
    let totalWait = 0;
    const waitDuration = 500; // 0.5 seconds

    while (!condition() && totalWait < timeout) {
        await delay(waitDuration);

        totalWait += waitDuration;
    }

    if (totalWait >= timeout && !condition()) {
        onTimeout();

        return false;
    }

    return true;
}

export { waitFor };
export default delay;
