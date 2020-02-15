const buySellStock = (arr) => {
    let buyPrice = Infinity;
    let currProfit = 0;
    let profit = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < buyPrice) {
            buyPrice = arr[i];
        } else {
            if (arr[i] - buyPrice > currProfit) {
                currProfit = arr[i] - buyPrice;
                if (i === arr.length - 1) {
                    profit += currProfit;
                }
            } else {
                profit += currProfit;
                currProfit = 0;
                buyPrice = arr[i];
            }
        }
    } return profit;
}

let arr1 = [7,1,5,3,6,4];
let arr2 = [1,2,3,4,5];
let arr3 = [7,6,4,3,1];

console.log(buySellStock(arr1));
console.log(buySellStock(arr2));
console.log(buySellStock(arr3));