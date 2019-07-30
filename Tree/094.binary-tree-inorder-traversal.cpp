
// Definition for a binary tree node.
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 };
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> res; 
        if(root == NULL){
            return res;
        }
        stack<TreeNode*> s;
        s.push(root); 
        while(!s.empty()){
            TreeNode* temp = s.top();
            if(s.top()->left !=NULL){
                s.push(temp->left);
                temp->left = NULL;
            }
            else {
            res.push_back(temp->val);
            s.pop();
            if(temp->right != NULL){
                s.push(temp->right);
                }
            }
        }
        return res; 
    }
};
