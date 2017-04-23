function countWords(str) {
// \S => Find a non-whitespace character g =>Perform a global match
var regex = /\S+/g,matchWords;
matchWords = str.match(regex);
return matchWords ? matchWords.length : 0;
}
