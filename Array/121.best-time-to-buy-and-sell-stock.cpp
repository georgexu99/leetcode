class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int maxProfit = 0;
        int minCost = pow(2,32); 
        for(int i=0; i<prices.size(); i++){
            minCost= min(minCost, prices[i]);
            maxProfit = max(maxProfit, prices[i]-minCost);
        }
        return maxProfit;
    }
};