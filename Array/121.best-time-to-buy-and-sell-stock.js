const buyAndSellStock = (arr) => {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minPrice) {
            minPrice = arr[i];
        } else if ((arr[i] - minPrice) > maxProfit) {
            maxProfit = arr[i] - minPrice;
        }
    } return maxProfit;
}

const arr1 = [7,6,4,3,1];
const arr2 = [7,1,5,3,6,4];

console.log(buyAndSellStock(arr1));
console.log(buyAndSellStock(arr2));
