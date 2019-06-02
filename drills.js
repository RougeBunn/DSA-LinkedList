const LinkedList = require('./DSA-LinkedList');

let SLL = new LinkedList();
SLL.insertLast('Apollo');
SLL.insertLast('Boomer');
SLL.insertLast('Helo');
SLL.insertLast('Husker');
SLL.insertLast('Starbuck');
SLL.insertLast('Tauhida');
display(SLL);

function display(ll) {
  let node = ll.head;
  while (node !== null) {
    // console.log(node.value);
    node = node.next;
  }
}

function size(ll) {
  let node = ll.head;
  let count = 0;
  while (node !== null) {
    count++;
    node = node.next;
  }
  return count;
}
// console.log(size(SLL));

function isEmpty(ll) {
  return ll.head === null;
}
// console.log(isEmpty(SLL));

function findPrevious(ll, value) {
  let currNode = ll.head;
  let prevNode = ll.head;
  if (!ll.head) {
    return null;
  }
  while (currNode.value !== value) {
    if (currNode.next === null) {
      return null;
    } else {
      prevNode = currNode;
      currNode = currNode.next;
    }
  }
  return prevNode.value;
}
// console.log(findPrevious(SLL,'Husker'));

function findLast(ll) {
  let node = ll.head;
  while (node.next !== null) {
    node = node.next;
  }
  return node.value;
}
// console.log(findLast(SLL));

// 4. Mystery program

// loops through a list and checks current node's value for duplicates to next node. If they are the same, it will skip past it and continue through the list.
// time complexity: Polynomial time O(n^2)

// 5. Reverse a list

function reverseList(ll) {
  // input: 1 -> 2 -> 3
  // output: 1 <- 2 <- 3
  let currNode = ll.head;
  let prevNode = null;

  while (currNode.next !== null) {
    let currTemp = currNode;
    let prevTemp = prevNode;

    prevNode = currNode;
    currNode = currNode.next;
    currTemp.next = prevTemp;
  }
  currNode.next = prevNode;
  ll.head = currNode;
  return ll;
}

// console.log(reverseList(SLL));

// 6. 3rd from the end

function thirdFromEnd(ll) {
  let currNode = ll.head;

  while (currNode.next.next.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}

// console.log(thirdFromEnd(SLL));

// 7. Middle of a list

function middleOfList(ll) {
  const middle = Math.ceil(size(ll) / 2);
  console.log(middle);
  let counter = 0;
  let currNode = ll.head;
  let prevNode = ll.head;
  while (counter < middle) {
    if (currNode.next === null) {
      return new Error('Linked list not long enough');
    } else {
      prevNode = currNode;
      currNode = currNode.next;
    }
    counter++;
  }
  return prevNode;
}

console.log(middleOfList(SLL));

// 8. Cycle in a list

function cycleList(ll) {
  let currNode = ll.head;
  // iterate through the list to check if currNode has next value pointing to an earlier node?
}

const main = () => {
  let SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // SLL.remove('squirrel');
  // SLL.insertBefore('Athena', 'Boomer');
  // SLL.insertAfter('Hotdog', 'Helo');
  // SLL.insertAt('Kat', 3);
  // SLL.remove('Tauhida');
  // SLL.remove('Starbuck');
  // SLL.remove('Athena');
  // return SLL;
};

// console.log(main());
