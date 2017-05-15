
var zero = op(0), one = op(1), two = op(2), three = op(3), four = op(4), five = op(5), six = op(6), seven = op(7), eight = op(8), nine = op(9);
function op(digit) {
    return function (op) {
        return op ? op(digit) : digit;
    }
}
function plus(num) {
    return function (res) {
        return res + num;
    }
}
function minus(num) {
    return function (res) {
        return res - num;
    }
}
function times(num) {
    return function (res) {
        return res * num;
    }
}
function dividedBy(num) {
    return function (res) {
        return res / num;
    }
}