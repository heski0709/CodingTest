function solution(sizes) {
    let x = 0;
    let y = 0;
    var answer = sizes.map(([v1, v2]) => {
        if (v1 > v2) {
            const tmp = v1;
            v1 = v2;
            v2 = tmp;
        }

		if (x < v1) x = v1
		if (y < v2) y = v2
        return [v1, v2];
    });

	answer = x * y
    return answer;
}