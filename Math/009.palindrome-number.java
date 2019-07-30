class Solution {
    public boolean isPalindrome(int x) {
 String xstring = String.valueOf(x);
        int length = xstring.length();
        String backwards = "";
        for (int i = xstring.length() - 1 ; i >= 0; i--){
            backwards +=  xstring.charAt(i);

        }return backwards.equals(String.valueOf(x));

        
    }
}