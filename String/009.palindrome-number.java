package leetcode.String;

class Solution {
    public boolean isPalindrome(int x) {
        String s = String.valueOf(x);
        String backwards = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            backwards +=  s.charAt(i);
        }
        return backwards.equals(String.valueOf(x));
    }
}