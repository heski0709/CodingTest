#include <string>
#include <vector>
#include <map>

using namespace std;

map<string, int> vectorPairToMap(vector<string> &keys, vector<int> &values)
{
    map<string, int> resultMap;

    for (size_t i = 0; i < keys.size(); i++)
    {
        resultMap[keys[i]] = values[i];
    }

    return resultMap;
}

vector<int> solution(vector<string> name, vector<int> yearning, vector<vector<string>> photo)
{
    vector<int> answer;
    map<string, int> map = vectorPairToMap(name, yearning);

    for (auto &list : photo)
    {
        int result = 0;
        for (auto &human: list)
        {
            result += map[human];
        }

        answer.push_back(result);
    }
    
    return answer;
}