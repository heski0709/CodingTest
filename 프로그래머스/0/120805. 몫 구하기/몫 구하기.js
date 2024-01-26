function solution(num1, num2) {
    var answer = num2 === 0 ? 0 : Math.floor(num1 / num2);
    return answer;
}