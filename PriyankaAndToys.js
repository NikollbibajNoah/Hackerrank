function toys(w) {
    // Write your code here

    let container = [];
    const units = 4;

    //Sort to minimize the containers
    w.sort((a, b) => a - b);

    for (let i = 0; i < w.length; i++) {
        const current = w[i];
        const step = current + units;
        let subContainer = [];

        for (let j = i; j < w.length; j++) {
            const next = w[j];

            //Check if next is in unit range
            if (next >= current && next <= step) {
                if (i === j) {
                    i--;
                }
                subContainer.push(next);
                w.splice(j, 1);
                j--;
            }
        }

        //Add package into container
        if (subContainer.length > 0) {
            container.push(subContainer);
        }
    }

    return container.length;
}

console.log(toys([16, 18, 10, 13, 2, 9, 17, 17, 0, 19])); //3
console.log(toys([1, 2, 3, 21, 7, 12, 14, 21])); //4
console.log(toys([12, 15, 7, 8, 19, 24])); //4