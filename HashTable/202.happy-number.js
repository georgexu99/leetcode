const happy = (n) => {
    let num = n;
    let sum = num;
    let VAL_SET = new Set();
    while (sum != 1) {
        num = sum;
        sum = 0;
        while (num > 0) {
            let digit = num % 10;
            num = parseInt(num / 10);
            sum += Math.pow(digit, 2);
        }
        if (VAL_SET.has(sum)) {
            return false;
        }
        VAL_SET.add(sum);
    } return true;
}

console.log(happy(19));