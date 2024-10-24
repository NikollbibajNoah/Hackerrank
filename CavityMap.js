function cavityMap(grid) {
    // Write your code here

    let map = [];
    let result = [];

    //Convert Into 2d
    for (let i in grid) {
        const val = grid[i];

        let row = [];

        for (let j in val) {
            const char = val[j];
            
            row.push(+char); //Convert to int
        }

        map.push(row);
    }

    //Only works min on a 3x3
    if (map.length >= 3) {
        for (let i = 0; i < map.length; i++) {
            const row = map[i];

            //Top and Bottom
            if (i === 0 || i === map.length - 1) continue;

            //Check inner map
            for (let j = 0; j < row.length; j++) {
                const col = row[j];

                if (j === 0 || j === row.length - 1) continue;

                //Check nearby
                if (row[j - 1] < col && row[j + 1] < col
                    && map[i - 1][j] < col && map[i + 1][j] < col
                ) {
                    console.log(col);
                    row[j] = "X";
                }
            }
        }
    }

    //Convert Back to 1d Array
    for (let i = 0; i < map.length; i++) {
        const row = map[i];
        let content = "";

        for (let j = 0; j < row.length; j++) {
            const col = row[j];

            content += col;
        }

        result.push(content);
    }

    return result;
}

console.log(cavityMap(["12", "12"])) //12 12
console.log(cavityMap(["1112",
    "1912",
    "1892",
    "1234"]));
    /*
    1112
    1X12
    18X2
    1234
*/
// console.log(cavityMap(["989", "191", "111"]));
//     /*
//     1112
//     1X12
//     18X2
//     1234
// */