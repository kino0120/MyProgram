#pragma GCC optimize ("O3")
#pragma GCC target ("avx")
//#include<bits/stdc++.h>
#include<cstdio>
#include<algorithm>
#include<iostream>
using namespace std;
typedef long long ll;
#define rep(i, n) for(int i = 0; i < (n); i++)
#define rep1(i, n) for(int i = 1; i <= (n); i++)
#define co(x) cout << (x) << "\n"
#define cosp(x) cout << (x) << " "
#define ce(x) cerr << (x) << "\n"
#define cesp(x) cerr << (x) << " "
#define pb push_back
#define mp make_pair
#define chmin(x, y) x = min(x, y)
#define chmax(x, y) x = max(x, y)
#define Would
#define you
#define please

int P;
int cnt[10000];
char S[200000];
int main() {
	//cin.tie(0);
	//ios::sync_with_stdio(false);


	char c;
	int N = 0;
	while ((c = getchar_unlocked()) >= '0') N = N * 10 + c - '0';
	while ((c = getchar_unlocked()) >= '0') P = P * 10 + c - '0';
	if (P == 2) {
		ll kotae = 0;
		rep(i, N) {
			if ((getchar_unlocked() - '0') % 2 == 0) kotae += i + 1;
		}
		printf("%lld", kotae);
		return 0;
	}
	if (P == 5) {
		ll kotae = 0;
		rep(i, N) {
			if ((getchar_unlocked() - '0') % 5 == 0) kotae += i + 1;
		}
		printf("%lld", kotae);
		return 0;
	}

	cnt[0] = 1;
	ll kotae = 0;
	const int p = P;
	int ima = 1;
	int mae = 0;
	fread(S, 1, N, stdin);
	char *s = S + N;

	int shou = N / 5;
	int amari = N % 5;
	rep(i, shou) {
		int a = ((*--s - '0') * ima + mae) % p;
		kotae += cnt[a]++;
		mae = a;
		ima *= 10;
		a = ((*--s - '0') * ima + mae) % p;
		kotae += cnt[a]++;
		mae = a;
		ima *= 10;
		a = ((*--s - '0') * ima + mae) % p;
		kotae += cnt[a]++;
		mae = a;
		ima *= 10;
		a = ((*--s - '0') * ima + mae) % p;
		kotae += cnt[a]++;
		mae = a;
		ima *= 10;
		a = ((*--s - '0') * ima + mae) % p;
		kotae += cnt[a]++;
		mae = a;
		ima = ima * 10 % p;
	}
	rep(i, amari) {
		int a = ((*--s - '0') * ima + mae) % p;
		kotae += cnt[a]++;
		mae = a;
		ima *= 10;
	}
	cout << kotae << endl;

	Would you please return 0;
}
