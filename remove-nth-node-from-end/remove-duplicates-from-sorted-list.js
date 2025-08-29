import { LinkedList, Node } from "../library/LinkedList.js";
let input = [1];
// let input = [1, 1, 2];
// input = [1, 1, 2, 3, 3];
input = [1, 1, 2, 3, 3, 3, 3, 4, 4];
// input = [1, 2];
// Ou tput: [1,2,3]

const ll = new LinkedList();
for (const num of input) {
  ll.append(new Node(num));
}

const removeDuplicates = (head) => {
  let current = head;
  while (current) {
    let next = current.next;
    while (next && current.val == next.val) {
      current.next = next.next;
      next = next.next;
    }
    current = next;
  }

  console.log(head);
  return head;
};
const res = removeDuplicates(ll.head);
ll.traverse(res);
