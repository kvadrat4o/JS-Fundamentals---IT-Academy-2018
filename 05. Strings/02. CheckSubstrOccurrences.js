function checkSubstrOccurrences(text,word){
    'use strict';
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] === word) {
            counter++;
        }
    }
    return counter;
}