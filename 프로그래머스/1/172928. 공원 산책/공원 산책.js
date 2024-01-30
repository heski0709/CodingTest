function solution(park, routes) {
    const dirs = { N: [0, -1], S: [0, 1], W: [-1, 0], E: [1, 0] };
    let [x, y] = [0, 0];

    for (let index = 0; index < park.length; index++) {
        const line = park[index];

        if (line.includes("S")) {
            x = line.indexOf("S");
            y = index;

            break;
        }
    }

    for (const route of routes) {
        const [dir, num] = route.split(" ");
        const [saveX, saveY] = [x, y];
        let count = 0;

        while (count < num) {
            [x, y] = [x + dirs[dir][0], y + dirs[dir][1]];
            if (!park[y] || !park[y][x] || park[y][x] === "X") break;
            count++;
        }
        if (count !== parseInt(num)) [x, y] = [saveX, saveY];
    }

    return [y, x];
}