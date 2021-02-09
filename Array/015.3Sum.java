class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        Arrays.sort(nums);
        for (int i = 0; i < nums.length; i++) {
            int left = i+1;
            int right = nums.length - 1;
        

            while (left < right) {
                int target = -1 * nums[i];
                int total = nums[left] + nums[right];
                if (target == total) {
                    List<Integer> triplet = new ArrayList<Integer>();
                    triplet.add(nums[i]);
                    triplet.add(nums[left]);
                    triplet.add(nums[right]);
                    res.add(triplet);

                    // duplicates
                    while(left<right && nums[left] == triplet.get(1)) {
                        left++;
                    }

                    while (left<right && nums[right] == triplet.get(2)) {
                        right--;
                    }

                } else if (total > target) {
                    right--;
                } else if (total < target) {
                    left++;
                }
            }

            while ((i + 1) < nums.length && nums[i] == nums[i+1]) {
                i++;
            }
 
        }
        return res;
    }
}