function solution(wallpaper) {
    let minX = Number.MAX_VALUE;
    let minY = Number.MAX_VALUE;
    let maxX = 0;
    let maxY = 0;

    wallpaper.forEach((item, index) => {
        if (item.includes("#")) {
            const r1 = item.indexOf("#");
            minX = Math.min(r1, minX);
            minY = Math.min(index, minY);

            const r2 = item.lastIndexOf("#");
            maxX = Math.max(r2 + 1, maxX);
            maxY = Math.max(index + 1, maxY);
        }
    });
	
    return [minY, minX, maxY, maxX];
}