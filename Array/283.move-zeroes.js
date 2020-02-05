var moveZeroes = array => {
    let pointer = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            let temp = array[i];
            array[i] = array[pointer];
            array[0] = temp;
            pointer++;
        }
    }
    return array;
}