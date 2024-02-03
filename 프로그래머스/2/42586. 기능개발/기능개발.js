function solution(progresses, speeds) {
    const answer = [];
    while (progresses.length) {
        let count = 0;
        for (let i = 0; i < progresses.length; i++) {
            if (progresses[i] < 100) progresses[i] += speeds[i];
        }

        for (let i = 0; i < progresses.length; i++) {
            if (progresses[i] < 100) break;
            ++count
            progresses.shift()
            speeds.shift()
            --i;
        }

        if (count) answer.push(count);
    }

    return answer;
}