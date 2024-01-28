function solution(players, callings) {
    const obj = {};
    players.forEach((player, index) => (obj[player] = index));

    callings.forEach((call) => {
        const prevPlayer = players[obj[call] - 1];
        const prevIndex = obj[prevPlayer]++;
        const callIndex = obj[call]--;

        players[prevIndex] = players[callIndex];
        players[callIndex] = prevPlayer;
    });

    return players;
}