type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let initValue = init;
    const increment = () => {
        return ++initValue;
    }
    const decrement = () => {
        return --initValue;
    }
    const reset = () => {
        initValue = init;
        return initValue;
    }

    return { increment, decrement, reset };
};
