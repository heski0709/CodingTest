function solution(phone_book) {
    var answer = true;

    phone_book.sort()
    for (let index = 0; index < phone_book.length - 1; index++) {
        if (phone_book[index] === phone_book[index + 1].slice(0, phone_book[index].length)) {
            answer = false
            break;
        }
    }
    return answer;
}