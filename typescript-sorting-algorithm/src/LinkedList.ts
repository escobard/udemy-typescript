class Node {
  // assigned outside of the constructor so it doesn't have to be initiated with the class
  /// next property is initated as null unless a Node class instance is assigned to it
  next: Node | null = null;

  constructor(public data: number){}
}

export class LinkedList {
  head: Node | null = null;

  // creates a new node then adds it to the the existing linked list
  add( data:number ) : void {
    const node = new Node(data);

    // if no nodes exist in the linkedlist, makes this node the head
    if(!this.head){
      this.head = node;
      return;
    }

    // gives reference to the first node in our chain
    let tail = this.head;

    // if head has .next populated (or a preceeding node), add tail to the the .next node
    /// it then goes through every node in the list and if it has a defined .next property, it moves the tail to the next node, until it finds the end of the list which will have a null .next property
    while(tail.next) {
      tail = tail.next
    }

    tail.next = node;
  }

  get length(): number {

    // checks if node is the head, and returns a length of 0 because the list only has 1 node
    if (!this.head){
      return 0;
    }
    else {
      let length = 1;
      let node = this.head;
      // goes through all nodes in the list
      while(node.next){
        length++;
        node = node.next;
      }

      return length;
    }
  }

  at(index: number): Node {

    // throw error if list is empty and at function is called
    if(!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;

    // type annotation is required to avoid an error because TS expects node to const node to be of type Node but can also be null
    let node: Node | null = this.head;

    // goes through all the nodes to find the required index
    while (node) {
      // stops the loop once the node that matches the index is found
      if (counter === index){
        return node;
      }

      counter++;
      node = node.next;
    }

    // throws an error if the while loop doesn't return anything, went to the entire list and did not find the index
    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if(!this.head){
      throw new Error('List is empty')
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head){
      throw new Error('List is empty');
    }

    let node: Node | null = this.head;
    while (node){
      console.log(node.data);
      node = node.next;
    }
  }
}