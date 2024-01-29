#include <string>
#include <vector>

using namespace std;
void hanoi(int n, int from, int by, int to, vector<vector<int>> &out)
{
    if (n == 0)
        return;
    hanoi(n - 1, from, to, by, out);
    out.push_back({from, to});
    hanoi(n - 1, by, from, to, out);
}

vector<vector<int>> solution(int n)
{
    vector<vector<int>> answer;
    hanoi(n, 1, 2, 3, answer);
    return answer;
}