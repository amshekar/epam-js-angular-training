function countWords(str) {
    // \S => Find a non-whitespace character g =>Perform a global match
    var regex, matchWords;
    regex = /\S+/g;
    matchWords = str.match(regex);
    return matchWords ? matchWords.length : 0;
}
