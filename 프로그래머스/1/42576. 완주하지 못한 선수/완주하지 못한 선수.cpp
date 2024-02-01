#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

string solution(vector<string> participant, vector<string> completion) {
    unordered_map<string, int> obj;
    string answer = "";
    if (!completion.size())
        return participant[0];

    for (auto part : participant) {
        if (!obj[part]) obj[part] = 0;
        ++obj[part];
    };

    for (auto part : completion) {
        --obj[part];
    };
    
    for (auto iter = obj.begin(); iter != obj.end(); ++iter) {
        if (iter->second == 1) answer = iter->first;
    };

    return answer;
}