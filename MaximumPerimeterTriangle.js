function maximumPerimeterTriangle(sticks) {
    // Write your code here

    let triangles = [];
    const n = sticks.length;
    
    sticks.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {

        if (i + 2 < n) {
            let a = sticks[i];
            let b = sticks[i + 1];
            let c = sticks[i + 2];
         
            if (a + b > c) {
                if (a + b + c > triangles.reduce((acc, curr) => acc + curr, 0)) //Compare higher values
                triangles = [a, b, c];
            }
        }
    }

    if (triangles.length > 0) {
        return triangles;
    }
    
    return [-1];
}

console.log(maximumPerimeterTriangle([1, 1, 1, 3, 3])); //1 3 3
console.log(maximumPerimeterTriangle([1, 2, 3])); //-1
console.log(maximumPerimeterTriangle([1, 1, 1, 2, 3, 5])); //1 1 1