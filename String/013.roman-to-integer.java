public class Solution {
    int count = 0;
    boolean lastCounted =true;

        public int romanToInt(String s) {
            for(int i=0; i<s.length(); i++){
                if(!lastCounted){
                    lastCounted=true;
                }else {
                    before(s, i);
                    if(lastCounted){
                       addCount(s,i);

                    }
                }
            }return count;
        }

        public void addCount(String s, int i) {
            if (s.substring(i,i+1).equals("I")) {
                count+= 1;
            } else if (s.substring(i,i+1).equals("V")) {
                count+= 5;
            } else if (s.substring(i,i+1).equals("X")) {
                count+= 10;
            } else if (s.substring(i,i+1).equals("L")) {
                count+= 50;
            } else if (s.substring(i,i+1).equals("C")) {
                count+= 100;
            } else if (s.substring(i,i+1).equals("D")) {
                count+= 500;
            } else if (s.substring(i,i+1).equals("M")) {
                count+= 1000;
            }
        }

        public boolean iBeforeV(String s, int i) {
            if (i + 1 < s.length()) {
                return s.substring(i, i + 2).equals("IV");
            }return false;
        }
    public boolean iBeforeX(String s, int i) {
        if (i + 1 < s.length()) {
            return s.substring(i, i + 2).equals("IX");
        }return false;
    }
    public boolean xBeforeL(String s, int i) {
        if (i + 1 < s.length()) {
            return s.substring(i, i + 2).equals("XL");
        }return false;
    }
    public boolean xBeforeC(String s, int i) {
        if (i + 1 < s.length()) {
            return s.substring(i, i + 2).equals("XC");
        }return false;
    }
    public boolean cBeforeD(String s, int i) {
        if (i + 1 < s.length()) {
            return s.substring(i, i + 2).equals("CD");
        }return false;
    }
    public boolean cBeforeM(String s, int i) {
        if (i + 1 < s.length()) {
            return s.substring(i, i + 2).equals("CM");
        }return false;
    }
        public void before(String s, int i){
            if(iBeforeV(s, i)){
                count+=4;
                lastCounted=false;
            }
            if(iBeforeX(s,i)){
                count+=9;
                lastCounted=false;
            }
            if(xBeforeL(s,i)){
                count+=40;
                lastCounted=false;
            }
            if(xBeforeC(s,i)){
                count+=90;
                lastCounted=false;
            }if(cBeforeD(s,i)){
                count+=400;
                lastCounted=false;
            }if(cBeforeM(s,i)){
                count+=900;
                lastCounted=false;
            }
        }
    }
