function returnStringRepOfNumber(number){
    let digitNames = ['one','two','three','four','five','six','seven','eight','nine', 'zero'];
    let decNames = ['ten','twenty','thirty','fourty','fifty','sixty','seventy', 'ninety'];
    let hundredsNames = ['one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'];
    let digits = number.toString().split('');
    let firstDigit = digits[0];
    let secondDigit = digits[1];
    let thirdDigit = digits[2];
    let result = '';
    for(let i = 0; i <= hundredsNames.length; i++){
        if(firstDigit === hundredsNames[i]){
            result += hundredsNames[i];
            break;
        }
    }
    result += ' ';
    for(let i = 0; i <= decNames.length; i++){
        if(secondDigit === decNames[i]){
            result += decNames[i];
            break;
        }
    }
    result += '-';
    for(let i = 0; i <= digitNames.length; i++){
        if(thirdDigit === decNames[i]){
            result += digitNames[i];
            break;
        }
    }
    result.trim();
    console.log(result);
}