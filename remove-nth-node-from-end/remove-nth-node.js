import { LinkedList, Node } from "../library/LinkedList.js";

const ll = new LinkedList();
// const testCase = [1, 2, 3, 4, 5],
//   n = 2;
// const testCase = [1],
//   n = 1;
const testCase = [1, 2],
  n = 1;
for (const value of testCase) {
  ll.append(new Node(value));
}

const removeNthFromEnd = (head, n) => {
  let len = 0;
  let current = head;
  while (current) {
    len++;
    current = current.next;
  }
  console.log("len:", len);

  if (len == 1) {
    return null;
  }

  if (len == n) {
    return head.next;
  }

  let last = head;
  let count = 0;
  while (last && count < len - n) {
    count++;
    if (count == len - n) {
      const targetNode = last.next;
      const targetNodeNext = targetNode.next;
      last.next = targetNodeNext;
    }
    last = last.next;
  }

  return head;
};

const head = removeNthFromEnd(ll.head, n);

console.log(head);

// ll.traverse(head);
