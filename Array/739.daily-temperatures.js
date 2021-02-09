// given a list of daily temperatures T, return a list such that for each day in the input, tells you how many days you would
// have to wait until a warmer temperature. If there is no warmer day which this is possible, put 0 instead.

// sample inputs
const test1 = [73, 74, 75, 71, 69, 72, 76, 73];
const test2 = [];
const test3 = [1];
const dailyTemperatures = (T) => {
    // sample inputs 
    // [73, 74, 75, 71, 69, 72, 76, 73]-> [ 1, 1, 4, 2, 1, 1, 0, 0]
    // [] -> []
    // [1] -> [0]

    // array has pop, push , peek
    if (T.length === 0) {
        return [];
    } else if (T.length === 1) {
        return [0];
    }

    let daysUntilWarmerTemperature = [];
    let stack = [];
    daysUntilWarmerTemperature.push(0);
    stack.push(T[T.length - 1]);
    // brute force: loop through each element. Keep track of indices. When it encounters a number larger than itself, record difference in index. 
    // O(n^2)

    // main case: loop backwards in array-> add the last in your stack- (add 73), 76, pop stack, lower? try to pop next.
    for (let i = T.length - 2; i >= 0; i--) {
        let tempStack = [...stack];
        let days = 1;
        let found = false;
        while (tempStack.length > 0) {
            if (tempStack.pop() > T[i]) {
                daysUntilWarmerTemperature.push(days);
                found = true;
                break;
            } else {
                days++;
            }
        }
        if (found === false) {
            daysUntilWarmerTemperature.push(0);
        }
        stack.push(T[i]);
    }
    return daysUntilWarmerTemperature.reverse();
}

console.log(dailyTemperatures(test1));
console.log(dailyTemperatures(test2));
console.log(dailyTemperatures(test3));
