
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Linkedlist {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    // add at the end of the linked list
    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }

    // remove the last element of the linked list
    pop(){
        if(!this.head) return undefined;
        let temp = this.head;
        let pre = this.head;
        while(temp.next){
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    // add node at the beginning of the linked list
    unshift(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // remove the first element of the linked list
    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length == 0){
            this.tail = null;
        }
        return temp;
    }

    // get node in a specific index
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i=0; i<index; i++){
            temp = temp.next;
        }   
        return temp;
    }

    // change the value of node in a given index
    set(index, value){
        let temp = this.get(index);
        if(temp){
            temp.value = value;
            return true;
        }
        return false;
    }

    // insert a new node in a given index
    insert(index, value){
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);
        if(index < 0 || index > this.length) return undefined;

        const newNode = new Node(value);
        let temp = this.get(index-1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return this;
    }

    // remmove a node in a given index
    remove(index){
        if(index === 0) return this.shift();
        if(index === this.length) return this.pop();
        if(index < 0 || index >= this.length) return undefined;

        let temp = this.get(index);
        let pre = this.get(index-1);

        pre = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    // reverse the linked list
    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let prev = null;
        let next = temp.next; 

        for(let i=0; i < this.length; i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
}


let myLinkedList = new Linkedlist(5);
myLinkedList.push(6);
myLinkedList.push(7);
myLinkedList.push(8);
myLinkedList.push(9);

// myLinkedList.unshift(4);
// myLinkedList.pop();
// myLinkedList.shift();

console.log(myLinkedList);


