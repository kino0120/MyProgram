class UnionFind():
    #コンストラクタ、n個の親ノードを作成
    def __init__(self,n):
        self.n = n
        self.parents = [-1] * n
    #親ノード探し、再帰関数
    def find(self,x):
        if self.parents[x] < 0:
            return x
        else:
            self.parents[x] = self.find(self.parents[x])
            return self.parents[x]
    #結合する関数
    def union(self, x, y):
        # x,yの根を返す
        x = self.find(x)
        y = self.find(y)

        # 同じグループなら、何もしない
        if x==y:
            return
        # 違うグループで、xの根の方が大きかった場合、xとyを交換する
        if self.parents[x] > self.parents[y]:
            x,y = y,x
        # xのグループにyを結合させ、yには
        self.parents[x] += self.parents[y]
        self.parents[y] = x

    # xの所属するグループの要素数
    def size(self,x):
        return -self.parents[self.find(x)]
    
    # 同じグループか返す
    def same(self,x,y):
        return self.find(x) == self.find(y)
    # 同じグループの要素を返す
    def members(self,x):
        root = self.find(x)
        return [i for i in range(self.n) if self.find(i)==root]

    # 全ての根の要素を返す
    def roots(self):
        return [i for i,x in enumerate(self.parents) if x<0]
    # グループの個数を返す
    def group_count(self):
        return len(self.roots())
    
    # ルート要素：そのグループに含まれる要素のリストの辞書を返す
    def all_group_menbers(self):
        return {r: self.members(r) for r in self.roots()}

    def __str__(self):
        return '\n'.join('{}:{}'.format(r,self.members(r)) for r in self.roots())


uf = UnionFind(6)
print(uf)
uf.union(0,1)
print(uf)
uf.union(2,5)
print('##########')
print(uf)
uf.union(3,5)
print('##########')
print(uf)
print(uf.parents)