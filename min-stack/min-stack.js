class MinStack {
  stack = [];
  minStack = [];

  push(value) {
    this.stack.push(value);
    if (
      this.minStack.length == 0 ||
      value <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(value);
    }
  }

  pop() {
    const last = this.stack.pop();
    if (this.minStack[this.minStack.length - 1] == last) {
      this.minStack.pop();
    }
  }

  top() {
    const top = this.stack[this.stack.length - 1];
    console.log(top);
    return top;
  }

  getMin() {
    const min = this.minStack[this.minStack.length - 1];
    console.log(min);
    return min;
  }
}

const stack = new MinStack();

stack.push(0);
stack.push(1);
stack.push(0);
stack.getMin();
stack.pop();
stack.getMin();
stack.pop();
stack.push(-2);
stack.push(-1);
stack.push(-2);
stack.getMin();
stack.pop();
stack.top();
stack.getMin();
stack.pop();
stack.getMin();
stack.pop();
