function solution(array, commands) {
   var answer = [];
    
    for (const [start, end, i] of commands) {
        answer.push(array.slice(start - 1, end).sort((a, b) => a - b)[i - 1])
    }
    return answer;
}