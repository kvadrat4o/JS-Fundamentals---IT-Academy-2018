function htmlEscaping(text){
    'use strict';

    text = text.replace(/</gi,'&lt;');
    text = text.replace(/>/gi,'&gt;');
    return text;
}