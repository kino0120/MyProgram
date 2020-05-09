s = 0
cnt = 0
m = 1
for i in range(100):
  num = 2019*m
  if '0' in list(str(num)):
    continue
  else:
    cnt += 1
  m += 1
  s = len(str(num))
  print(s)

#print(cnt)