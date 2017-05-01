if (!Array.prototype.odd) {
    Array.prototype.odd = function (num) {
        return this.filter(function (num) {
            return num % 2 !== 0;
        });
    }
}
if (!Array.prototype.even) {
    Array.prototype.even = function (num) {
        return this.filter(function (num) {
            return num % 2 === 0;
        });
    }
}
if (!Array.prototype.average) {
    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
}

if (!Array.prototype.sum) {
    Array.prototype.sum = function () {
        return this.reduce(function (num1, num2) {
            return num1 + num2;
        }, 0);
    }
}

if (!Array.prototype.cube) {
    Array.prototype.cube = function () {
        return this.map(function (num) {
            return num * num * num;
        });
    }
}


if (!Array.prototype.square) {
    Array.prototype.square = function () {
        return this.map(function (num) {
            return num * num;
        });
    }
}