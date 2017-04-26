/// if string length module is 0 then 2 characters at else one middle character 
function getMiddle(s) {
    let len = s.length, middle = len / 2;
    return len % 2 === 0 ? s.substring(middle - 1, middle + 1) : s.substring(middle, middle + 1);
}