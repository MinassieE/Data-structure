class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value){
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);

        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return this;
    }
}

let myStack = new Stack(5);
console.log(myStack.push(6));