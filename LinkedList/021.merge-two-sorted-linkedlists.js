class ListNode {
    constructor(value) {
      this.value = value;
      this.next;
    }
}




const splice = (l1, l2) => {
    const curr = new ListNode();
    const dummyHead = curr;
    while (l1 && l2) {
        if (l1.value <= l2.value) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = l1 ? l1 : l2;
    return dummyHead;
}