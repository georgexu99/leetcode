class Solution {
    public int lengthOfLongestSubstring(String s) {
        int res = 0;
        int left = 0;
        int right = 0;
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        while (right < s.length()) {
            if(!map.containsKey(s.charAt(right))) {
                if ((right - left + 1) > res) {
                    res = right - left + 1;
                }
                map.put(s.charAt(right), right);
                right++;
            } else {
                int prevLeft = left;
                int prevIndexOfLetterAtRight = map.get(s.charAt(right));
                map.remove(s.charAt(right));
                map.put(s.charAt(right), right);
                left = prevIndexOfLetterAtRight + 1;
                for (int j = prevLeft; j < prevIndexOfLetterAtRight; j++) {
                      map.remove(s.charAt(j));     
                }
                right++;
            }
        } return res;
    }
}
