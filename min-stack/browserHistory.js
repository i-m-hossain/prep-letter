class BrowserHistory {
  stack = [];
  forwardStack = [];

  constructor(homepage) {
    this.stack.push(homepage);
  }

  visit(url) {
    this.stack.push(url);
    this.forwardStack = [];
  }

  back(times) {
    let count = 0;
    while (this.stack.length > 1 && count < times) {
      const last = this.stack.pop();
      this.forwardStack.push(last);
      count++;
    }

    const top = this.top(this.stack);
    return top || null;
  }

  top(stack) {
    return stack[stack.length - 1] || null;
  }

  forward(times) {
    let count = 0;
    while (this.forwardStack.length && count < times) {
      const last = this.forwardStack.pop();
      this.stack.push(last);
      count++;
    }

    return this.top(this.stack);
  }
}

const browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com"); // You are in "leetcode.com". Visit "google.com"
browserHistory.visit("facebook.com"); // You are in "google.com". Visit "facebook.com"
browserHistory.visit("youtube.com"); // You are in "facebook.com". Visit "youtube.com"
console.log(browserHistory.back(1)); // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
console.log(browserHistory.back(1)); // You are in "facebook.com", move back to "google.com" return "google.com"
console.log(browserHistory.forward(1)); // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit("linkedin.com"); // You are in "facebook.com". Visit "linkedin.com"
console.log(browserHistory.forward(2)); // You are in "linkedin.com", you cannot move forward any steps.
console.log(browserHistory.back(2)); // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
console.log(browserHistory.back(7)); // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
