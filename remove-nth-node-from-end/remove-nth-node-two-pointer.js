import { LinkedList, Node } from "../library/LinkedList.js";

const ll = new LinkedList();
// const testCase = [1, 2, 3, 4, 5],
//   n = 2;
const testCase = [1],
  n = 1;
// const testCase = [1, 2],
//   n = 1;
for (const value of testCase) {
  ll.append(new Node(value));
}

const removeNthNode = (head, n) => {
  const dummyNode = new Node(0);
  dummyNode.next = head;

  let fast = dummyNode;
  let slow = dummyNode;

  for (let i = 0; i < n + 1; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummyNode.next;
};

const res = removeNthNode(ll.head, n);
ll.traverse(res);
