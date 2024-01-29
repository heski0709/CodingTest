#include <string>
#include <vector>

using namespace std;

bool solution(string s) {
    if (!(s.length() == 4 || s.length() == 6)) return false;

    for (auto &&c : s)
    {
        if (!isdigit(c)) return false;
    }

    return true;
}