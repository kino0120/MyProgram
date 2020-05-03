N = int(input())
A = list(map(int, input().split()))
e = 0
leng = [1]
for s in range(N):
  while e < N:
    if A[e] not in A[s:e]:
      e += 1
    else:
      leng.append(len(A[s:e]))
      e -= 1
      break

print(max(leng))