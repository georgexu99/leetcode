class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        if(k == 0 || nums.size() ==0){
            return;
        }else {
            int temp = nums[nums.size() -1];
            nums.insert (nums.begin(), temp);
            nums.erase(nums.begin() + nums.size()-1);
            rotate(nums, k-1);
        }
    }
};