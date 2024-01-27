#include <string>
#include <vector>

using namespace std;

int solution(vector<vector<string>> board, int h, int w) {
    int answer = 0;
    int size = board.size();
    int dh[] = { 0, 1, -1, 0 };
    int dw[] = { 1, 0, 0, -1 };
    string current = board[h][w];

    for (int i = 0; i < 4; i++) {
        int h_check = h + dh[i];
        int w_check = w + dw[i];

        if (h_check < 0 || h_check >= size) continue;
        if (w_check < 0 || w_check >= size) continue;
        if (board[h_check][w_check].compare(current) == 0) answer++;
    }

    return answer;
}