function solution(numbers) {
    let answer = [];
    const result = numbers.every((v) => v === 0)

    if (result) return '0'
    numbers.sort((a, b) => {
        const strA = String(a);
        const strB = String(b);
        return Number(strB + strA) - Number(strA + strB);
    });

    answer = numbers.join("");
    return answer;
}