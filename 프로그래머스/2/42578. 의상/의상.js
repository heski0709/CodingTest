function solution(clothes) {
    let obj = {};
    var answer = 1;

    for (const [name, part] of clothes) {
        if (obj[part]) obj[part] = [...obj[part], name];
        else obj[part] = [name];
    }

    for (const item of Object.values(obj)) {
        answer *= item.length + 1;
    }
    
    answer -= 1
    return answer;
}