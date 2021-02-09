class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    peek() {
        return this.data[this.top -1];
    }
    push(num) {
        this.data.push(num);
        this.top += 1;
    }
    length() {
        return this.top;
    }
    pop() {
        if (this.isEmpty !== false) {
            this.top -= 1;
            return this.data.pop();
        }
    }
    isEmpty() {
        return this.top === 0;
    }
}

const dailyTemp = (arr) => {
    // base case
    if (arr.length() === 0) {
        return [];
    } else if (arr.length() === 1) {
        return [0];
    }

    const result = [];
    result.fill(0,0,arr.length() -1);
    const stack = new Stack();

    result.push(0);
    stack.push([arr[arr.length - 1], arr.length - 1 ])

    for (let i = arr.length() - 2; i >= 0; i--) {
        while(stack.length > 0 && stack[stack.length -1][0] > arr[i]) {


        }
    }
    

}

