from itertools import combinations
from scipy.sparse.csgraph import floyd_warshall

N, M = map(int, input().split())
edges = [list(map(int, input().split())) for _ in range(M)]

graph = [[float('inf')] * N for _ in range(N)]
path = [float('inf')] * N

for i in range(N - 1):
    graph[i][i] = 0

for u, v, l in edges:
    if u == 1 or v == 1:
        path[max(u, v) - 1] = l
    else:
        graph[u - 1][v - 1] = l
        graph[v - 1][u - 1] = l

graph = floyd_warshall(graph, directed=False)
ans = []
for i, j in combinations(range(1, N), 2):
    ans.append(path[i] + graph[i][j] + path[j])
print(int(min(ans)) if min(ans) < float('inf') else -1)
