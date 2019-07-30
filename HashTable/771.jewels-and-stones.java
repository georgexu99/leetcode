class Solution {
    public int numJewelsInStones(String J, String S) {
        HashSet<Character> jewels = new HashSet(); 
        int res = 0;
        for(int i =0; i < J.length(); i++){
            jewels.add(J.charAt(i));
        }
        for(int j=0; j<S.length(); j++){
            if(jewels.contains(S.charAt(j))){
                res++;
            }
        }
        return res;
        
    }
}