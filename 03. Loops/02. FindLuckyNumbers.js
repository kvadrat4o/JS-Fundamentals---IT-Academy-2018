function findLuckyNumbers(){
    var intervalStart = 1000;
    var intervalEnd = 9999;
    for(let i = intervalStart; i <= intervalEnd; i ++){
        let digits = i.toString().split('').map(Number.parseInt);
        if(digits[0] + digits[1] === digits[2] + digits[3]){
            console.log(`The number${i} is lucky, because ${digits[0]} + ${digits[1]} = ${digits[2]} + ${digits[3]}`);
        }
    }
}