function solution(bandage, health, attacks) {
    currentHealth = health
    prevTurn = 0

    for (const [turn, attack] of attacks) {
        for (let index = 1; index < turn - prevTurn; index++) {
            
            if (index % bandage[0] === 0) {
                currentHealth += bandage[2]
            }
            currentHealth += bandage[1]
        }

        if (currentHealth > health) currentHealth = health
        prevTurn = turn
        currentHealth -= attack
        
        if (currentHealth <= 0) return -1
    }

    return currentHealth;
}