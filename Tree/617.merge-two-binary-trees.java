/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode mergeTrees(TreeNode t1, TreeNode t2) {
        if(t1==null && t2==null){
            return null; 
        }
        
        int val;
        int val1;
        int val2;
        
        if(t1 ==null){
            val1= 0;
        }else {val1=t1.val;}
        
        if(t2 == null){
            val2 = 0;
        }else {
            val2 = t2.val;
        }
        
        val = val1 + val2 ;
        
        TreeNode node = new TreeNode(val); 
        
        TreeNode arg1;
        TreeNode arg2;

        node.left = mergeTrees(t1 == null ? null : t1.left , t2 == null ? null : t2.left);
        node.right = mergeTrees(t1 == null ? null : t1.right, t2 == null ? null : t2.right);
        
        return node; 
    }
}