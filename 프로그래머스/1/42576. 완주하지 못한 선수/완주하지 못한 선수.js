function solution(participant, completion) {
    const obj = {}
    var answer = '';

    if (!completion || !completion.length) return participant[0]
    
    for (const part of participant) {
        if (!obj[part]) obj[part] = 0
        ++obj[part]
    }

    for (const part of completion) {
        --obj[part]
    }

    for (let [part, num] of Object.entries(obj)) {
        if (num === 1) answer = part
    }

    return answer;
}