function solution(priorities, location) {
    let answer = 0;

    const queue = priorities.map((priority, index) => ({
        index,
        priority,
    }));

    priorities.sort((a, b) => b - a);
	
    while (true) {
        const process = queue[0];
        queue.shift();

        if (priorities[0] === process.priority) {
            ++answer;
            if (process.index === location) break;
            priorities.shift();
        } else {
            queue.push(process);
        }
    }
    return answer;
}