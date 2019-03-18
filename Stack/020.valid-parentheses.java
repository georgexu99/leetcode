class Solution {
    public boolean isValid(String s) {

        Stack<Character> stack = new Stack<>();
        for (int i = 0; i<s.length(); i++){
            if( s.charAt(i) == '('|| s.charAt(i) == '{' || s.charAt(i) == '['){
               stack.push(s.charAt(i)); 
            }
            else if (stack.empty()){
                    return false; 
                }
            else if(s.charAt(i) == ')'){
                if (stack.peek() != '('){
                    return false;
                }else stack.pop(); 
            }
            else if(s.charAt(i) == '}'){
                if (stack.peek() != '{'){
                    return false;
                }else stack.pop(); 
            }
            else if(s.charAt(i) == ']'){
                if (stack.peek() != '['){
                    return false;
                }else stack.pop(); 
            }
            
        }
        if (!stack.empty()){
            return false;
        }
        return true; 

    
    }
}