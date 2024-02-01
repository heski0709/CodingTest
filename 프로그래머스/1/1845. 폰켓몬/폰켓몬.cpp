#include <vector>
#include <algorithm>
using namespace std;

int solution(vector<int> nums)
{
    sort(nums.begin(), nums.end());

    int answer = 0;
    int tmp = 0;

    for (auto i : nums)
    {
        if (answer >= nums.size() / 2) break;
        if (i == tmp) continue;
        ++answer;
        tmp = i;
    }
    return answer;
}