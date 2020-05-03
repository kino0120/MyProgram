def find(x):
  if P[x] < 0:
    return x
  else:
    return P[x]

N, Q, *X = map(int,open(0).read().split())
P = [-1] * N

for i in range(Q):
  i *= 3
  p, a, b = X[i], find(X[i + 1]), find(X[i + 2])
  if p:
    print('Yes' if a == b else 'No')
  else:
    if a != b:
      if P[a] > P[b]:
        a, b = b, a
      P[a] += P[b]
      P[b] = a
