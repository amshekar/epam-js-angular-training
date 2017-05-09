// JavaScript source code

function construct(Class, ...arg) {
    var newObj = Object.create(Class.prototype);
    Class.apply(newObj, arg);
    return newObj;
}