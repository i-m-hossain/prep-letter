import { LinkedList, Node } from "../library/LinkedList.js";
import { print } from "../utills/utills.js";

const l1 = new LinkedList();

// l1.append(new Node(7));
// l1.append(new Node(2));
// l1.append(new Node(4));
// l1.append(new Node(3));
l1.append(new Node(5));

const l2 = new LinkedList();

// l2.append(new Node(5));
// l2.append(new Node(6));
// l2.append(new Node(4));
l2.append(new Node(5));

function traverse(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

function reversedHead(l1) {
  console.log(l1);
  if (!l1.next) {
    return l1;
  }
  const dummy = new Node(0);
  dummy.next = l1;

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
}

// 0 -> 2 -> 4-> 3 ->5
var addTwoNumbers = function (l1, l2) {
  let ll1 = reversedHead(l1);
  let ll2 = reversedHead(l2);
  let carry = 0;
  let dummy = new Node(0);

  let current = dummy;
  while (ll1 || ll2) {
    const val1 = ll1?.val || 0;
    const val2 = ll2?.val || 0;

    const sum = val1 + val2 + carry;

    const remainder = sum % 10;
    if (sum > 9) {
      const node = new Node(remainder);
      current.next = node;
      current = current.next;
      carry = 1;
    } else {
      current.next = new Node(sum);
      current = current.next;
      carry = 0;
    }
    ll1 = ll1?.next;
    ll2 = ll2?.next;
  }

  if (carry > 0) {
    current.next = new Node(carry);
  }
  return reversedHead(dummy.next);
};
// 3 -> 4 ->2->9
// 4 -> 6 -> 5
const result = addTwoNumbers(l1.head, l2.head);
traverse(result);



