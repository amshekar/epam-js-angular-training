
function countWords(str) {
if(!str.trim())
return 0;
else if(str.indexOf("﻿"))
return str.trim().split(﻿).length;
else 
return str.trim().split(' ').length;
 // return result;
}
