function solution(arr) {
    const answer = [0, 0]
    const size = arr.length

    const compare = (sx, sy, size, arr) => {
        for (let y = sy; y < sy + size; y++) {
            for (let x = sx; x < sx + size; x++) {
                if (arr[sy][sx] !== arr[y][x]) return false
            }            
        }
        return true
    }

    const square_div = (sx, sy, size, arr) => {
        if (compare(sx, sy, size, arr)) {
            ++answer[arr[sy][sx]]
            return;
        }

        size /= 2
        square_div(sx, sy, size, arr)
        square_div(sx + size, sy, size, arr)
        square_div(sx, sy + size, size, arr)
        square_div(sx + size, sy + size, size, arr)
    }

    square_div(0, 0, size, arr)
    return answer
}