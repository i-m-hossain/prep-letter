import { LinkedList, Node } from "../library/LinkedList.js";

const ll = new LinkedList(new Node(1));
ll.append(new Node(2));
ll.append(new Node(3));
ll.append(new Node(30));
ll.append(new Node(40));
ll.append(new Node(44));
ll.traverse(ll.head);

const removeNthFromEnd = (head, n) => {};
