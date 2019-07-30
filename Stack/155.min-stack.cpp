class MinStack {
public:
    /** initialize your data structure here. */
    vector<int> stack;
    vector<int> min;
    MinStack() {
        min.push_back(2147483647);  
    }
    
    void push(int x) {
        if(min.size() ==0){
            min.push_back(x);
        }else {
            if(x<min.back()){
                min.push_back(x);
            }else{
                min.push_back(min.back()); 
            }
            stack.push_back(x);
        }
        
    }
    
    void pop() {
        min.pop_back();
        stack.pop_back();
        
    }
    
    int top() {
        return stack.back();
    }
    
    int getMin() {
        return min.back();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(x);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */