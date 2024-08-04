#include <bits/stdc++.h>
using namespace std;

// Function to calculate the minimum number of moves
int MinMoves(int N) {
    vector<int> dp(N + 1, INT_MAX);
    dp[1] = 0;

    for (int i = 2; i <= N; ++i) {
        // Option 1: Reduce by 1 soldier
        dp[i] = dp[i - 1] + 1;

        // Option 2: Reduce by half
        if (i % 2 == 0) {
            dp[i] = min(dp[i], dp[i / 2] + 1);
        }

        // Option 3: Reduce by two-thirds
        if (i % 3 == 0) {
            dp[i] = min(dp[i], dp[i / 3] + 1);
        }
    }

    return dp[N];
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);

    int N;
    cin >> N;
    cout << MinMoves(N) << endl;

    return 0;
}
