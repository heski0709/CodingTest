function solution(citations) {
    citations.sort((a, b) => b - a);
    var answer = citations.length;
    while (answer > 0) {
        let count = 0;

        citations.forEach((citation) => {
            if (citation >= answer) ++count;
        });

        if (count >= answer) break;
        --answer;
    }

    return answer;
}