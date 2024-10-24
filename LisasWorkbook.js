
///Chapter, Max Problems per Page, Problems per chapter
function workbook(n, k, arr) {

    let count = 0
    let page = 0

    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= arr[i]; j++){
            if (k==1 || j % k == 1) {
                page++;
            }
            
            if (j == page) {
                count++;
            }
        }
    }
    return count;
}

console.log(workbook(5, 3, [4, 2, 6, 1, 10])); ///4
console.log(workbook(10, 5, [3, 8, 15, 11, 14, 1, 9, 2, 24, 31])); ///8