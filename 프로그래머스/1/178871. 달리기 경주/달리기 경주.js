function solution(players, callings) {
    const obj = {}
    players.forEach((player, index) => {
        obj[player] = index + 1
    })

    callings.forEach((call) => {
        const prevPlayer = players[obj[call] - 2]
        const prevIndex = obj[prevPlayer]++ - 1
        const callIndex = obj[call]-- - 1

        players[prevIndex] = players[callIndex]
        players[callIndex] = prevPlayer
    })

    return players;
}