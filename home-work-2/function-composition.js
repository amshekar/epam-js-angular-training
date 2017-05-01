//ref https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments
function compose(f, g) {
    // Compose the two functions here!
    return function (...args) {
        return f(g(...args));
    }
}