
function getMiddle(s)
{
let len=s.length;
var result;
  if(len % 2===0)
  {
  result=s.substring(len/2-1,len/2+1);
  }
  else if(len % 2===1)
  {
  result=s.substring(len/2,len/2+1);
  }
  else if(len==1)
  result=s;
  return result;
}
