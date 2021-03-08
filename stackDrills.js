// 1. Create a stack class

class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

// 2. Useful methods for a stack

function peek(stack) {
    let top = stack.top.data;
    console.log(top);
}

function isEmpty(stack) {
    if (stack.top === null) {
        return true
    }
    else {
        return false
    }
}

function display(stack) {
    let results = [];
    let current = stack.top;
    while (current !== null) {
        results.push(current.data);
        current = current.next;
    }
    console.log(results);
}

// 3. Check for palindromes using a stack

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let palindrome = new Stack();
    for (let i = (Math.floor(s.length / 2)); i < s.length; i++) {
        palindrome.push(s[i])
    }
    let current = palindrome.top;
    let pos = 0;
    while (current !== null) {
        if (current.data !== s[pos]) {
            return false
        }
        current = current.next;
        pos++;
    }
    return true
}

// 4. Matching parentheses in an expression

function matchingParentheses(str) {
    //create a stack for the expression
    let newStack = new Stack();
    for (let i = 0; i < str.length; i++) {
        newStack.push(str[i])
    }
    let counterOpen = 0;
    let counterClose = 0;
    let posOpen = 0;
    let posClose = 0;
    let pos = str.length;
    let current = newStack.top;
    while (current !== null) {
        if (current.data === "(") {
            counterOpen++;
            posOpen = pos;
        }
        if (current.data === ")") {
            counterClose++;
            posClose = pos;
        }
        pos--;
        current = current.next;
    }
    if (counterOpen === counterClose) {
        return `No errors found`
    }
    if (counterOpen > counterClose) {
        return `you are missing a ")" at position ${posOpen}`
    }
    if (counterOpen < counterClose) {
        return `you are missing a "(" at position ${posClose}`
    }
}

// 5. Sort Stack
function sortStack(stack) {
    let tempStack = new Stack();
    let current = stack.top;
    while (!isEmpty(stack)) {
        let temp = stack.top.data
        stack.pop();
        while (!isEmpty(tempStack) && tempStack.top.data < temp) {
            stack.push(tempStack.top.data);
            tempStack.pop();
        }
        tempStack.push(temp);
    }
    display(tempStack);
}

function main() {
    starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    //peek(starTrek)
    emptyStack = new Stack();
    //console.log(isEmpty(emptyStack))
    //display(starTrek);
    starTrek.pop();
    starTrek.pop();
    //display(starTrek);
}

main()

//console.log(is_palindrome("dad"));
//console.log(is_palindrome("A man, a plan, a canal: Panama"));
//console.log(is_palindrome("1001"));
//console.log(is_palindrome("Tauhida"));

//console.log(matchingParentheses("((x+y)=z"))

testStack = new Stack();
testStack.push(5)
testStack.push(3)
testStack.push(4)
testStack.push(7)
display(testStack)
sortStack(testStack)