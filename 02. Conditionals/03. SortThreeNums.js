function sortThreeNums(num1,num2,num3){
    if(num1 < num2) {
        if(num3 < num2){
            if(num1 < num3){
                console.log(`sorted: ${num2}, ${num3}, ${num1}`);
            } else {
                console.log(`sorted: ${num2}, ${num1}, ${num3}`);
            }
        } else {
            console.log(`sorted: ${num3}, ${num2}, ${num1}`);
        }
    } else {
        if(num1 > num3){
            if(num2 > num3){
                console.log(`sorted: ${num1}, ${num2}, ${num3}`);
            } else {
                console.log(`sorted: ${num1}, ${num3}, ${num2}`);
            }
        } else {
            console.log(`sorted: ${num3}, ${num1}, ${num2}`);
        }
    }
}