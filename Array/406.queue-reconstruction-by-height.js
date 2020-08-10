// Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k) where
// `h` - height of the person
// `k` - number of people in front of this person who have a height >= h.
// write an algorithm to reconstruct this queue.

// example inputs: 
// [[7,0], [4,4], [7,1], [5,0] , [6,1], [5,2]] ->
// [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

// [] -> []
// [[1, 0]] -> [[1, 0]]

// brute force: 
// insertion sort? 
// O(nlogn)

const heightSort = (a, b) => {
    if (a[0] != b[0]) {
        return a[0] > b[0] ? -1 : 1; // sort by decreasing height
    } else {
        return a[1] > b[1] ? 1 : -1; // if not possible sort by increasing K
    }
}
const reconstructQueue = (people) => {
    let sortedQueue = people.sort(heightSort);
    let result = [];

    while(sortedQueue.length > 0) {
        let person = sortedQueue.shift();
        
        // insert people tallest to shortest, at the index designated by k value.
        result.splice(person[1], 0, person);
        return result;
    }
}
