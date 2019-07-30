class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0 || strs == null) {
            return "";
        }

        String first = strs[0];


        for (int i = 0; i < first.length(); i++) {
            for (String s : strs) {
                if (s != null && s.length()>i) {
                    if (!(s.charAt(i) == first.charAt(i))) {
                        if (i == 0) {
                            return "";
                        } else {
                            return first.substring(0, i);
                        }
                    }
                }else return first.substring(0,i);
            }
        }return first;
    }
}