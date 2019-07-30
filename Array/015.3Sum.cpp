class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> res; 
        std::sort(nums.begin(), nums.end()); 
        for(int i=0; i<nums.size(); i++){
            int left = i + 1; 
            int right = nums.size() - 1; 
            
            while(left < right){
                int sum = nums[left]+nums[right];
                int goal = -nums[i]; 
                
                if(sum < goal){
                    left++; 
                }else if( sum > goal){
                    right--; 
                }else {
                    vector<int> vect;
                    vect.push_back(nums[i]);
                    vect.push_back(nums[left]);
                    vect.push_back(nums[right]);
                    res.push_back(vect);
                    
                    //dups
                    while(left<right && nums[left]==vect[1]){
                        left++; 
                    }
                    while(left<right && nums[right]==vect[2]){
                        right--;
                    }
                }
            }
            while(i+1 < nums.size() && nums[i] == nums[i+1]){
            i++;
            } 
        }
        return res;
    }
};