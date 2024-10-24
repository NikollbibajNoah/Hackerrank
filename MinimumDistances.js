
function minimumDistances(a) {

    let result = Infinity;

    let seen = [];
    let equals = [];

    for (let i in a) {
        const val = a[i];

        if (seen.includes(val)) {
            equals.push(val);
        } else {
            seen.push(val);
        }
    }

    if (equals.length > 0) {
        for (let i = 0; i < equals.length; i++) {
            const val = equals[i];

            let pos = [];

            for (let j = 0; j < a.length; j++) {
                const num = a[j];


                if (val === num) {
                    pos.push(j);
                }
            }

            let dist = Math.abs(pos[0] - pos[pos.length - 1]);
            
            if (dist < result) {
                result = dist;
            }
        }
    } else {
        result = -1;
    }

    return result;
}

console.log(minimumDistances([1, 2, 3, 4, 10])); ///-1
console.log(minimumDistances([7, 1, 3, 4, 1, 7])); ///3