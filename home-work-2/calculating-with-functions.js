
var zero = op(0);
var one = op(1);
var two = op(2);
var three = op(3);
var four = op(4);
var five = op(5);
var six = op(6);
var seven = op(7);
var eight = op(8);
var nine = op(9);
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