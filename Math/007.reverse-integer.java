package leetcode.Math;

class Solution {
    public int reverse(int x) {
        int result = 0; 
   
        while(Math.abs(x) > 9){
            int temp = x%10; 
            result += temp;
            x /= 10;
            if (result > Integer.MAX_VALUE/10 || (result == Integer.MAX_VALUE / 10 && temp > 7)) return 0;
            if (result < Integer.MIN_VALUE/10 || (result == Integer.MIN_VALUE / 10 && temp < -8)) return 0;
            result *=10 ; 
        }       
    
        result += x;
        if(result == -2147483648){
            return 0;
        }
        return result; 
        
    }
}