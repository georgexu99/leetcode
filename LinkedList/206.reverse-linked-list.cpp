/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if(head == NULL){
            return NULL;
        }
        ListNode* newHead = head->next; 
        ListNode* originalHead = head; 
        while(newHead != NULL){
            ListNode* temp = newHead->next; 
            originalHead->next = temp;
            newHead->next = head;
            head = newHead; 
            newHead = temp; 
        }
        newHead = NULL;
        originalHead = NULL; 
        return head; 
    }
};