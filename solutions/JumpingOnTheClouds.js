function jumpingOnClouds(c) {
    // Write your code here

    const n = c.length;
    let jumps = 0;

    for (let i = 0; i < n; i++) {

        //Check If there are 2 more clouds
        if (i + 2 < n && c[i] % 2 === 0) {

            ///Are there 2 cumulus clouds
            if (c[i + 2] % 2 === 0 && c[i + 1] % 2 === 0) {
                jumps++;
                i++;
            }
            else if (c[i + 1] % 2 === 0) {
                jumps++;
            }
        }
        else if (i + 1 < n) {
            if (c[i + 1] % 2 === 0) {
                jumps++;
            } else {

            }
        }
    }
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]) ///4
jumpingOnClouds([0, 0, 0, 0, 1, 0]) ///3