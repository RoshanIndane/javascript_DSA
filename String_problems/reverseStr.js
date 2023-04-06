function reverseWords(splitWords) {

    var splitCount = splitWords.split(" ");
    c = splitCount.length;
    var output = "";

    for(let i = c-1; i > -1; i--) {
        output = output + " " + splitCount[i];
    }

    return output;

}


document.write(reverseWords("I Love programming very much"));