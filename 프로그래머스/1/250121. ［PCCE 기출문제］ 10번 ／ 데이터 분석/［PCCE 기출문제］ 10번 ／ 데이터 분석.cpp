#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

vector<vector<int>> solution(vector<vector<int>> data, string ext, int val_ext, string sort_by)
{
    unordered_map<string, int> dict =
        {
            {"code", 0},
            {"date", 1},
            {"maximum", 2},
            {"remain", 3}
        };
    vector<vector<int>> answer;
    int sort_index = dict[sort_by];
    int ext_index = dict[ext];

    for (const auto &list : data)
    {
        if (list[ext_index] < val_ext) answer.emplace_back(list);
    }
    
    sort(answer.begin(),
         answer.end(),
         [sort_index](const vector<int> &a, const vector<int> &b)
         {
             return a[sort_index] < b[sort_index];
         });

    return answer;
}