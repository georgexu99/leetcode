class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int zeros = 0;
        for(int i = 0; i<nums.size(); i++){
            if(nums[i]==0){
                zeros++; 
                nums.erase(nums.begin() + i);
            }
        }
        for(int j=0; j<zeros; j++){
            nums.push_back(0);
        }
    }
};