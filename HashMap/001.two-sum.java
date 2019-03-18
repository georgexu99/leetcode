class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i< nums.length; i++){
            int j = target- nums[i]; //==7 
            if (map.containsKey(j)){ 
                int[] intArray = new int[] {i, map.get(j)};
                return intArray; 

            }else {
                map.put(nums[i], i); 
            }
        }
        int[] notfound = new int[] {};
        return notfound;
    }
}