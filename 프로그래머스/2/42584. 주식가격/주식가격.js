function solution(prices) {
    const answer = [];
	const stack = [];

	prices.forEach((price, idx) => {
		while (stack.length > 0 && price < stack[stack.length - 1]?.price) {
			const top = stack.pop()
			answer[top.idx] = idx - top.idx
		}

		stack.push({price, idx})
		answer[idx] = prices.length - 1 - idx
	})

	return answer
}