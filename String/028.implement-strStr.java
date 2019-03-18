class Solution {
    public int strStr(String haystack, String needle) {
        if (needle.equals("")){
            return 0;
        } else if ( haystack.indexOf(needle)>= 0){
            return haystack.indexOf(needle);
        } else return -1; 


    }
}