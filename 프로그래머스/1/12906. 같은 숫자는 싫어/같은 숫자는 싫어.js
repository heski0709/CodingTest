function solution(arr)
{
    var answer = [];

    if (!arr) return answer
    
    answer = arr.filter((item, index, arr) => {
        return item !== arr[index + 1]
    })
    
    return answer;
}