function solution(sequence, k) {
	const N = sequence.length 
    var answer = [0, N - 1];
    let sub = Number.MAX_VALUE
	let sum = 0
	let end = 0

    for (let start = 0; start < N; start++) {
		while (sum < k && end < N) {
			sum += sequence[end++]
		}

		if (sum === k) {
			if (start === end - 1) return [start, end - 1]
			if (sub > end - start - 1) answer = [start, end - 1];
            
            sub = end - start - 1
		}

        sum -= sequence[start];
    }

    return answer;
}