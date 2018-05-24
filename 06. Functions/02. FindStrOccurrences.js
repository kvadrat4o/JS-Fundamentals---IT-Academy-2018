function findOcurrences(text,word,caseParam = true){
    'use strict';


    let counter = 0;
    if (caseParam) {
        //case sensitive search
        for (let i = 0; i < text.length; i++) {
            if (text[i] === word) {
                counter++;
            }
        }
    }else{
        //case insensitive search
        for (let i = 0; i < text.length; i++) {
            if (text[i].toUppercase() === word.toUppercase()) {
                counter++;
            }
        }
    }
    return counter;
}