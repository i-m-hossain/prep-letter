import { LinkedList, Node } from "../library/LinkedList.js";
import { print } from "../utills/utills.js";

const ll = new LinkedList();
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  ll.append(new Node(num));
}

var reverseKGroup = function (head, k) {
  if (!head) {
    return head;
  }

  let len = 0;
  let current = head;
  while (current) {
    current = current.next;
    len++;
  }
  const groups = Math.floor(len / k);

  let result = head;
  for (let i = 1; i <= groups; i++) {
    const right = i * k;
    const left = right - k + 1;
    result = reverseBetween(result, left, right);
  }
  return result;
};

function reverseBetween(head, left, right) {
  const dummy = new Node(0);
  dummy.next = head;
  let pre = dummy;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  let start = pre.next;
  let then = start.next;

  for (let i = 0; i < right - left; i++) {
    start.next = then.next;
    then.next = pre.next;
    pre.next = then;
    then = start.next;
  }
  return dummy.next;
}

const res = reverseKGroup(ll.head, 2);
ll.traverse(res);
