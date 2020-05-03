#include <cstring>
#include <cstdlib>
#include <cctype>
#include <cassert>
#include <vector>
#include <algorithm>
#include <string>
#include <stack>
#include <queue>
#include <deque>
#include <list>
#include <set>
#include <map>

using namespace std;

int a, b;
int A[1024], B[1024];
int memo[1024][1024][2];

int getMax(int i, int j, int t)
{
	if (i >= a && j >= b) return (0);
	if (memo[i][j][t] >= 0) return (memo[i][j][t]);
	
	if (t & 1){
		if (i >= a) return (getMax(i, j + 1, t + 1));
		if (j >= b) return (getMax(i + 1, j, t + 1));
		return (memo[i][j][1] = min(getMax(i, j + 1, t + 1), getMax(i + 1, j, t + 1)));
	}
	
	int res = 0;
	if (j < b) res = max(res, getMax(i, j + 1, t + 1) + B[j]);
	if (i < a) res = max(res, getMax(i + 1, j, t + 1) + A[i]);
	return (memo[i][j][0] = res);
}

int main()
{
	memset(memo, -1, sizeof(memo));
	scanf("%d %d", &a, &b);
	
	for (int i = 0; i < a; i++) scanf("%d", A + i);
	for (int j = 0; j < b; j++) scanf("%d", B + j);
	
	printf("%d\n", getMax(0, 0, 0));
	
	return (0);
}