// ex add(param1)(param2)  
//if param2 exists which will pass the value to chain i.e param1=> add param2=>chain .....

function add(num) {
    function chain(chainNum) {
        return add(num + chainNum);
    }
    chain.valueOf = function () { return num };
    return chain;
}
