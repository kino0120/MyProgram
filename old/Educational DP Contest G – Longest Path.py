## 引用：https://yottagin.com/?p=1815

import sys
import collections

input = sys.stdin.readline

def main():
    N,M = map(int,input().split())
    lst_edge = [[] for _ in range(N)]
    deg = [0] * N
    for _ in range(M):
        x,y = map(int, input().split())
        lst_edge[x-1].append(y-1)
        deg[y-1] += 1

    que = collections.deque()
    for v in range(N):
        if deg[v] == 0:
            que.append(v)
    
    print(que)

    dp = [0]*N
    while que:
        v = que.popleft()
        lst_nv = lst_edge[v]
        for nv in lst_nv:
            deg[nv] -= 1
            if deg[nv] == 0:
                que.append(nv)
                dp[nv] = max(dp[nv],dp[v] + 1)
    print('answer')
    print(max(dp))

main()