// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
  var obj=this;
  var arr=string.split(".");
  arr.forEach(function(elem){
  if(obj)
  {
  obj=obj[elem];
  }
  });
  return obj;
}
