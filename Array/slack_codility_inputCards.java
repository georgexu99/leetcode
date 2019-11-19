import java.util.HashMap;

// solution: store all available inputs in hashmap
// for each 

class Solution {

    public void populateMap(HashMap<String, Integer> map) {
        for(int i = 0; i<= 10; i++) {
            map.put(Integer.toString(i),i);
        }
        map.put("J",11);
        map.put("Q",12);
        map.put("K",13);
    }

    public String formatAndValidate(String s, HashMap<String, Integer> map) {
        if (map.containsKey(s.replaceFirst("^0+(?!$)", ""))) {
            return s;
        }
        else {
            System.out.println(s + "is not a valid input! Disqualifying the owner of this card this round.");
            return "0";
        }
    }
    public int JonWins(String[] Anne, String[] Jon) {
        if (Jon.length == 0) {
            return 0;
        }
        int result = 0;
        HashMap<String, Integer> map = new HashMap<>();
        this.populateMap(map);
        for (int i=0; i<Jon.length; i++) {
            if (map.get(formatAndValidate(Jon[i], map)) > map.get(formatAndValidate(Anne[i], map))) {
                result++;
            }
        }
        return result;
    }
}