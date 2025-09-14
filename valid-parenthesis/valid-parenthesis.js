/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const opening = new Set()
    opening.add('(')
    opening.add('{')
    opening.add('[')

    const closing = new Set()
    closing.add(')')
    closing.add('}')
    closing.add(']')


    const mapping = new Map()
    mapping.set('(', ')')
    mapping.set('{', '}')
    mapping.set('[', ']')


    const stack = []
    for (let i = 0; i < s.length; i++){
        if (opening.has(s[i])) {
            stack.push(s[i])
        }
        if (closing.has(s[i])) {
            const last = stack.pop()
            if (mapping.get(last) !== s[i]) {
                return false
            }
        }
    }
    return true
};


let input = "()"
// Output: true
// input = "()[]{}"
// Output: true
// input = "(]"
// Output: false
// input = "([])"
// Output: true
input = "([)]"
// Output: false
const result = isValid(input)
console.log(result)




