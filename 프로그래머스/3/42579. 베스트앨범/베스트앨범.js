function solution(genres, plays) {
    const list = new Map();
    const genreSums = [];
    const answer = [];

    for (let i = 0; i < genres.length; i++) {
        if (list.has(genres[i])) list.get(genres[i]).push([i, plays[i]]);
        else list.set(genres[i], [[i, plays[i]]]);
    }

    const values = list.values();
    let item = values.next();
    while (!item.done) {
        item.value.sort((a, b) => b[1] - a[1]);
        item = values.next();
    }

    list.forEach((value, key) => {
        const sum = value.reduce((acc, cur) => acc + cur[1], 0);
        genreSums.push({ genre: key, sum });
    });

    genreSums.sort((a, b) => b.sum - a.sum);

    genreSums.forEach((i) => {
        list.get(i.genre)
            .slice(0, 2)
            .forEach(([key, _]) => answer.push(key));
    });
    return answer;
}