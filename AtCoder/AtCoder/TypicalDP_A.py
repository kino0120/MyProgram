import numpy as np
import this

N = int(input())
arr = list(map(int,input().split()))
lim = sum(arr)
dp = [0]*lim
dp.insert(0,1)
dp = np.array(dp)

for i in arr:
    dp[i:] = np.maximum(dp[i:],dp[:-i])
    print(dp)