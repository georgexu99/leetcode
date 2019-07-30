
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode head(0); 
        ListNode * p = &head; 
        int carry = 0;
        
        while (l1 || l2 || carry){
            int sum = 0;
            if(l1){
                sum+= l1->val; 
            }
            if(l2){
                sum+= l2->val; 
            }
             
            sum+= carry; 
            carry = sum/10;
            
            p->next = new ListNode(sum % 10);
            p = p->next; 
            if(l1){
                l1= l1->next; 
            }
            if(l2){
                l2= l2->next; 
            }
        }
        return head.next; 
    }
};