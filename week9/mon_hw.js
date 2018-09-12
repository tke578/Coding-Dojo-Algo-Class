function SLNode(value){
  this.val = value;
  this.next = null;
}

function SLQueue(){
  this.head = null;
  this.tail = null;
// Create SLQueue method enqueue(val) to add the given value to end of our queue. 
// Remember, SLQueue uses a singly linked list (not an array)
  this.enqueue = function(value){
    let newNode = new SLNode(value);
//     check if tail exists
    if(!this.tail){
      this.head = newNode;
      this.tail = newNode;
    }else{
      tmp = this.tail;
      this.tail = newNode;
      tmp.next = newNode;
    }
  }
// Create SLQueue method front() to return the value at front of our queue, without removing it.
  this.front = function(){
    if(!this.head){
      return false;
    }else{
      return this.head.val;
    }
  }
// Create SLQueue method dequeue() to remove and return value at front of queue. Remember, SLQueue uses singly linked list (not array
  this.dequeue = function(){
    if(!this.head){
      return false;
    }else{
      tmp = this.head;
//       if queue  size of 1
        if(!tmp.next){
          this.head = null;
          this.tail = null;
        }
        this.head = tmp.next
        return tmp.val;
    }
  }
  // Create method contains(val) to return whether given value is found within our queue.
  this.contains = function(value){
    if(!this.head){
      return false;
    }else{
      let currentQueue = this.head;
      while(currentQueue){
        if(currentQueue.val === value){
          return true;
        }
        currentQueue = currentQueue.next
      }
      return false;
    }
  }
  // Return the number of stacked values.
  this.size = function(){
    if(!this.head){
      return 0;
    }else{
      let sizeOfQueue = 0;
      let currentQueue = this.head;
      while(currentQueue){
        sizeOfQueue ++;
        currentQueue = currentQueue.next
      }
      return sizeOfQueue;
    }
  }
}

const queue = new SLQueue()
const node1 = new SLNode(1);
const node2 = new SLNode(2);
const node3 = new SLNode(3);
const node4 = new SLNode(4);
queue.head = node1;
queue.tail = node4;
node1.next = node2;
node2.next = node3;
node3.next = node4;
queue.enqueue(5)
console.log(queue);
console.log(queue.front());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.contains(6));
queue.enqueue(6)
console.log(queue);
console.log(queue.size());

// Given two SLQueue objects, create a standalone function that returns whether they are equal. Queues are equal only if they have equal elements in identical order. 
// Allocate no other object, and return the queues in their original condition upon exit.

const queue1 = new SLQueue()
const node1 = new SLNode(1);
const node2 = new SLNode(2);
const node3 = new SLNode(3);
const node4 = new SLNode(4);
queue1.head = node1;
queue1.tail = node4;
node1.next = node2;
node2.next = node3;
node3.next = node4;

const queue2 = new SLQueue();
const node5 = new SLNode(1);
const node6 = new SLNode(2);
const node7 = new SLNode(3);
const node8 = new SLNode(4);
queue2.head = node5;
queue2.tail = node8;
node5.next = node6;
node6.next = node7;
node7.next = node8;

console.log(queue1);
console.log(queue2);

function compare(q1,q2){
  if(q1 && q2){
   let current1 = q1.head;
   let current2 = q2.head;
   while(current1 && current2){
     if(current1.val !== current2.val){
       return false;
     }
     current1 = current1.next;
     current2 = current2.next;
   }
    return current1 === current2
  }
  return false; 
}

// Create a standalone function to remove an SLQueue’s lowest value, otherwise leaving values in the same sequence. 
// Use only local variables; allocate no other objects. 
// Remove all duplicates of this value
function removeMin(q1){
  if(!q1.head || !q1.tail){
    return false;
  }
  let current = q1.head;
  let min = q1.head.val;
  while(current){
    if(current.val < min){
      min = current.val;
    }
    current = current.next;
  }
  if(min !== null){
    let current2 = q1.head;
    while(current2){
      if(current2.val === min){
      current2.val = null;
    }
    current2 = current2.next;
    }
  }
  return q1;
}