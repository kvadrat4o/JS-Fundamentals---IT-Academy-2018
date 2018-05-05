function checkIfPrime(num){
    let result = true;
    for(let i = 0; i <= Math.sqrt(num); i ++){
        if(num % i == 0){
            result = false;
        } else {
            result = true;
        }
    }
    return result;
}