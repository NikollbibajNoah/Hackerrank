function strangeCounter(t) {
    
    let counter = 3; //Start Count
    let i = 1; //Start Timer
    
    while (true) {

        i += counter;
        counter *= 2;
        
        if (i > t) {
            counter /= 2;
            i -= counter;

            break;
        }
    }

    let temp = counter - (t - i);
    
    return temp;
}

console.log(strangeCounter(4)); //6
console.log(strangeCounter(17)); //5