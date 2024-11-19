//Replacing single chars at position
function replaceChar(base, char, pos) {
    const p1 = base.substring(0, pos);
    const p2 = base.substring(pos + 1);

    return p1 + char + p2;
}


function beautifulBinaryString(b) {
    // Write your code here

    let chars = [];
    let result = 0;
    const sub = "010";

    for (let i = 0; i < b.length; i++) {
        const value = b[i];

        //Store substring from string
        if (chars.length < 3) {
            chars.push(value);
        } else {
            chars.push(value);
            chars.shift();
        }

        if (chars.length === 3) {
            const currrentChars = chars.join("");
            
            //Check if the last 3 chars is "010"
            if (currrentChars === sub) {
                if (value === "1") {
                    b = replaceChar(b, "0", i);
                    chars[2] = "0";
                }
                else if (value === "0") {
                    b = replaceChar(b, "1", i);
                    chars[2] = "1";
                }

                result++;
            }
        }
    }

    return result;
}

console.log(beautifulBinaryString("0101010")); //2
console.log(beautifulBinaryString("01100")); //0
console.log(beautifulBinaryString("0100101010")); //3