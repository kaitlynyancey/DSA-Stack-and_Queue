// 6. Create a queue using Singly linked list
// 7. Create a queue class using Doubly linked List
class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }
        if (this.last) {
            node.previous = this.last;
            this.last.next = node;
        }
        this.last = node;
    }
    dequeue() {
        if (this.first === null) {
            return
        }
        const node = this.first;
        if (node === this.last) {
            this.last = null;
            this.first = null;
        }
        else {
            this.first = this.first.next;
            this.first.previous = null;
            node.next = null;
        }
        return node.value;
    }
}

function peek(queue) {
    return queue.first.value
}

function isEmpty(queue) {
    if(queue.first === null) {
        return true
    }
    else {
        return false
    }
}

function display(queue) {
    let current = queue.first
    let display = [];
    while (current !== null) {
        display.push(current.value);
        current = current.next;
    }
    console.log(display)
}

function main() {
    let starTrekQ = new Queue();
    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');
    console.log(peek(starTrekQ));
    console.log(isEmpty(starTrekQ));
    display(starTrekQ)
    starTrekQ.dequeue();
    starTrekQ.dequeue();
    display(starTrekQ);
    
}

//main();

// 8. Queue implementation using a stack

// 9. Square dance pairing
function dancePairing() {
    let femaleQueue = new Queue();
    femaleQueue.enqueue('Jane')
    femaleQueue.enqueue('Madonna')
    femaleQueue.enqueue('Beyonce')

    let maleQueue = new Queue();
    maleQueue.enqueue('Frank')
    maleQueue.enqueue('John')
    maleQueue.enqueue('Sherlock')
    maleQueue.enqueue('David')
    maleQueue.enqueue('Christopher')

    while(!isEmpty(femaleQueue) && !isEmpty(maleQueue)){
        let female = femaleQueue.first.value;
        let male = maleQueue.first.value;
        console.log(`Female dancer is ${female}, and the male dancer is ${male}`);
        femaleQueue.dequeue();
        maleQueue.dequeue();
    }
    if(!isEmpty(femaleQueue)){
        let counter = 0;
        while(!isEmpty(femaleQueue)){
            counter++;
            femaleQueue.dequeue();
        }
        console.log(`There are ${counter} female dancers waiting to dance`)
    }
    if(!isEmpty(maleQueue)){
        let counter = 0;
        while(!isEmpty(maleQueue)){
            counter++;
            maleQueue.dequeue();
        }
        console.log(`There are ${counter} male dancers waiting to dance`)
    }
}

//dancePairing();

// 10. The Ophidian Bank