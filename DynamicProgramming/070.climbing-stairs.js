const climbStairs = (n) => {
    const stairs = [0, 1 ,2];
    for (let i = 3; i <= n; i++) {
        stairs[i] = stairs[i-2] + stairs[i-1];
    }
    return stairs[n];
}

console.log(climbStairs(5));