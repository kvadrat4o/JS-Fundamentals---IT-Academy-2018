//a < b + c,
//b < a + c,
//c < a + b.

function checkTriangleSides(sideA,sideB,sideC){
    let result = false;
    if(sideA < siedeB + SideC && sideB < sideA + sideC && sideC < sideA + sideB){
        result = true;
    } else {
        result = false;
    }
    return result;
}