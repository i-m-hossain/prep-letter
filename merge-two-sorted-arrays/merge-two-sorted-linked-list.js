class Node {
  constructor(value = 0) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  addNode(node) {
    let currentNode = this.head;
    while (currentNode?.next) {
      currentNode = currentNode?.next;
    }
    currentNode.next = node;
  }

  traverseLinkedList() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const list2 = new LinkedList(new Node(4));
// list2.addNode(new Node(10));
// list2.addNode(new Node(12));
// list2.addNode(new Node(32));
// list2.addNode(new Node(33));
// list2.addNode(new Node(43));

const list1 = new LinkedList(new Node(20));
list1.addNode(new Node(30));
list1.addNode(new Node(35));
list1.addNode(new Node(40));
list1.addNode(new Node(450));

// 4 -> 10 -> 12 -> 32 -> 33 -> 43
// 20 -> 30 -> 35 -> 40 -> 450
//!Todo: Now perform sorting operation between list1 and list2

function mergeTwoLists(l1, l2) {
  const dummy = new Node();
  let current = dummy;
  while (l1 && l2) {
    if (l1.value < l2.value) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  if (l1) current.next = l1;
  else current.next = l2;
  return dummy.next;
}

const mergedHead = mergeTwoLists(list1.head, list2.head);
let currentNode = mergedHead;
while (currentNode) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
