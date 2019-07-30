class Solution {
public:
    int climbStairs(int n) {
        
        if(n==0){
            return 0;
        }else if(n==1){
            return 1;
        }else if(n==2){
            return 2;
        }
        vector<int> stairs; 
        stairs.push_back(0);
        stairs.push_back(1);
        stairs.push_back(2);
        
        for (int i=3; i<n; i++){
            stairs.push_back(stairs[i-2] + stairs[i-1]);
        }
        return stairs[n-2] + stairs[n-1]; 
    }
};