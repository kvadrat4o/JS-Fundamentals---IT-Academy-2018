function solveQuadraticEquasion(a,b,c){
    let d = b * b - 4 * a * c;
    let x1,x2;
    if(d > 0){
        x1 = (-b - Math.sqrt(d))/ (2* a);
        x2 = (-b + Math.sqrt(d))/ (2* a);
    }else if(d === 0){
        x1 = x2 = -b / (2 * a);
    }else {
        x1 = 'complex number';
        x2 = 'complex number';
    }
    console.log(`Equasion with parameters ${a}, ${b} and ${c} has roots ${x1} and ${x2}`);
}