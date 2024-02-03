function solution(s){
    var stack = [];

    if (s[0] === ")" || s[s.length - 1] === "(") return false;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push("(");
        } else {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }

    if (stack.length > 0) return false;

    return true;
}
