function solution(park, routes) {
let x, y;

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
        const saveX = x;
        const saveY = y;

        switch (dir) {
            case "N": y -= parseInt(num); break;
            case "S": y += parseInt(num); break;
            case "W": x -= parseInt(num); break;
            case "E": x += parseInt(num); break;
            default: break;
        }

        if (y < 0 || y >= park.length) {
            y = saveY
            continue;
        }

        if (x < 0 || x >= park[0].length) {
            x = saveX
            continue;
        }

        if (x !== saveX) {
            const min = Math.min(x, saveX)
            const max = Math.max(x, saveX)

            if (park[y].slice(min, max + 1).includes("X")) {
                x = saveX;
                continue;
            };
        }

        if (y !== saveY) {
            const min = Math.min(y, saveY)
            const max = Math.max(y, saveY)

            for (let i = min; i <= max; i++) {
                if (park[i][x] === 'X') {
                    y = saveY
                    break;
                }
            }
        }
    }

    return [y, x];
}