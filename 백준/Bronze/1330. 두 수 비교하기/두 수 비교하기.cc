#include <stdio.h>
int main()
{
    int N,M;
    scanf("%d %d", &N, &M);
    printf("%s", N == M ? "==" : N > M ? ">" : "<");
    return 0;
}