#include <iostream>
using namespace std;
using ll = long long;
using P = pair<int,int>;
using Pl = pair<int,ll>;

#define ALL(g) (g).begin(),(g).end()
#define REP(i, x, n) for(int i = x; i < n; i++)
#define rep(i,n) REP(i,0,n)
#define EXIST(s,e) ((s).find(e)!=(s).end())
#define pb push_back
#define DEBUG false

const int mod=1e9+7,INF=1<<30;
const double EPS=1e-12,PI=3.1415926535897932384626;
const ll LINF=1LL<<60;
const int MAX_N = 10004, MAX_C = 102;
const ll lmod = 1e9+7;

ll dp[2][MAX_N][MAX_C];

// 参考: http://kurkur.hatenablog.com/entry/2017/12/12/203337
/*dp[0][i][j] := (下からi桁までの数で、modがjであるものの数)
dp[1][i][j] := (下からi桁までの数で、modがjかつ各桁がNの同じ桁の数以下のものの数)
とすると、 dp[0][i+1][j']にはdp[0][i][j]から、dp[1][i+1][j']には次置く数(=k)とNの同じ桁の数(=c)によって遷移が決まる。
k>cならば満たさないのでdp[1][i+1][j'] += 0
k=cならばそれまでの桁が条件を満たしていないといけないので dp[1][i+1][j'] += dp[1][i][j]
k<cならばなんでもいいのでdp[1][i+1][j'] += dp[0][i][j]*/

int main(){
    int N,D;
    string s;
    cin >> D >> s;
    N = s.size();
    dp[0][0][0] = dp[1][0][0] = 1LL;
    rep(i,N){
        rep(j,D){
            rep(k,10){
                int c = int(s[N-1-i]-'0');
                (dp[0][i+1][(j+k)%D] += dp[0][i][j]) %= lmod;
                (dp[1][i+1][(j+k)%D] += (k>c ? 0LL : dp[k==c][i][j])) %= lmod;
     
            }
        }
    }
    cout << dp[1][N][0] - 1LL << endl;
  return 0;
}