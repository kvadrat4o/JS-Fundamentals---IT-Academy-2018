function findBiggerElement(arr){
    'use strict';

    let currBigger = 0;
    for (let i = 1; i < arr.length - 1; i++) {
       if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
           currBigger = arr[i]
       }
    }
    return currBigger;
}
findBiggerElement([1,2,3,2,3,4,5]);