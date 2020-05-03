import sys
read = sys.stdin.readline

N,M  = map(int,read().split())
s_arr = []
c_arr = []
for _ in range(M):
  s,c  = read().split()
  s = s.replace('Y','1').replace('N','0')
  s_arr.append(s)
  c_arr.append(int(c))
  
dp = [float('inf')]*(2**N)
dp[0] = 0

for i in range(M):
  for j in range(2**N):
    if dp[j]!=float('inf'):
      dp[j|int(s_arr[i],2)] = min(dp[j|int(s_arr[i],2)],dp[j]+c_arr[i])
      
if dp[-1]==float('inf'):
  print(-1)
else:
  print(dp[-1])