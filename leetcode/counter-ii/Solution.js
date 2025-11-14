/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
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