function findAllNumsInIntervalDevidingBy3(num1,num2){
    if(num1 > num2){
        for(let i = num2; i <= num1; i ++){
            if(i % 3){
                console.log(i);
            }
        }
    } else {
        for(let i = num1; i <= num2; i ++){
            if(i % 3){
                console.log(i);
            }
        }
    }
}