#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    vector<unsigned long long> fibonacci = {0, 1};

    if (n < 2) return fibonacci[n];

    for (size_t i = 2; i <= n; i++)
    {
        fibonacci.push_back(fibonacci[i - 2] % 1234567 + fibonacci[i - 1] % 1234567);
    }
    
    int answer = fibonacci.back() % 1234567;
    return answer;
}