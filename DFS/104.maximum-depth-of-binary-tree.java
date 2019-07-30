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
    public int maxDepth(TreeNode root) {
        return maxDepthHelper(root);
    }
    
    
    public int maxDepthHelper(TreeNode node){
        if(node != null){
            return 1 + Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)); 
        }else return 0; 
    }
}