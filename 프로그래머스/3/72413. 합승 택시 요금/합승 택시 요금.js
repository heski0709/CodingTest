function solution(n, s, a, b, fares) {
    var answer = Number.MAX_VALUE;

    let graph = new Array(n + 1)
        .fill(0)
        .map(() => new Array(n + 1).fill(Number.MAX_VALUE));

    for (let [x, y, cost] of fares) {
        graph[x][y] = cost;
        graph[y][x] = cost;
    }

    for (let i = 1; i <= n; i++) {
        graph[i][i] = 0;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 1; k <= n; k++) {
                graph[j][k] = Math.min(graph[j][k], graph[j][i] + graph[i][k]);
            }
        }
    }

    for (let i = 1; i <= n; i++) {
        answer = Math.min(answer, graph[s][i] + graph[i][a] + graph[i][b]);
    }

    return answer;
}