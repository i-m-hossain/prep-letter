import { LinkedList, Node } from "../library/LinkedList.js";
import { print } from "../utills/utills.js";

var addTwoNumbers = function (l1, l2) {
  const l3 = new LinkedList();

  let current1 = l1;
  let current2 = l2;
  let carry = 0;
  while (current1 || current2) {
    const val = (current1?.val || 0) + (current2?.val || 0) + carry;

    if (val > 9) {
      const remain = val % 10;
      l3.append(new Node(remain));
      carry = 1;
    } else {
      l3.append(new Node(val));
      carry = 0;
    }
    current1 = current1?.next;
    current2 = current2?.next;
  }
  if (carry > 0) {
    l3.append(new Node(carry));
  }
  return l3.head;
};

const l1 = new LinkedList();
// l1.append(new Node(9));
// l1.append(new Node(9));
// l1.append(new Node(9));
// l1.append(new Node(9));
// l1.append(new Node(9));
// l1.append(new Node(9));
// l1.append(new Node(9));

l1.append(new Node(2));
l1.append(new Node(4));
l1.append(new Node(3));

const l2 = new LinkedList();
// l2.append(new Node(9));
// l2.append(new Node(9));
// l2.append(new Node(9));
// l2.append(new Node(9));

l2.append(new Node(5));
l2.append(new Node(6));
l2.append(new Node(4));

const result = addTwoNumbers(l1.head, l2.head);
let head = result;
while (head) {
  console.log(head.val);
  head = head.next;
}
