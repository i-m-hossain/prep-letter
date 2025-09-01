import { LinkedList, Node } from "../library/LinkedList.js";

const ll = new LinkedList();
const input = [1, 2, 3, 4, 5];
for (const num of input) {
  ll.append(new Node(num));
}

const reverseLinkedList = (head) => {
  if (!head) {
    return head;
  }

  const dummy = new Node(0);
  dummy.next = head;

  let pre = dummy;
  let start = pre.next;
  let then = start.next;

  while (then) {
    start.next = then.next;
    then.next = pre.next;
    pre.next = then;
    then = start.next;
  }

  return dummy.next;
};

const result = reverseLinkedList(ll.head);
ll.traverse(result);
