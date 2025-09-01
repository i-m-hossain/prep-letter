import { LinkedList, Node } from "../library/LinkedList.js";
import { print } from "../utills/utills.js";
let numbers = [1, 2, 3, 4, 5];
let left = 2;
let right = 4;
const ll = new LinkedList();
for (const num of numbers) {
  ll.append(new Node(num));
}

var reverseBetween = function (head, left, right) {
  if (!head) {
    return head;
  }
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
};

const res = reverseBetween(ll.head, left, right);
ll.traverse(res);
