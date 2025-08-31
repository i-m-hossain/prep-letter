import { LinkedList, Node } from "../library/LinkedList.js";

const ll = new LinkedList();
const input = [1, 2, 3, 4, 5];
for (const num of input) {
  ll.append(new Node(num));
}
// 1 --> 2 --> 3 --> 4 -->5
const reverseLinkedList = (head) => {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return head;
};

const result = reverseLinkedList(ll.head);

ll.traverse(result);
