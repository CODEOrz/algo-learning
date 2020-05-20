var backpack_01 = function (W, N, wt, val) {
  let dp = [];

  for (let i = 0; i <= N; ++i) {
    dp.push(Array.apply(null, { length: W + 1 }).map(() => 0));
  }

  for (let n = 1; n <= N; ++n) {
    for (let w = 1; w <= W; ++w) {
      console.log(JSON.stringify(dp));
      if (w - wt[n - 1] < 0) {
        dp[n][w] = dp[n - 1][w];
      } else {
        dp[n][w] = Math.max(
          dp[n - 1][w - wt[n - 1]] + val[n - 1],
          dp[n - 1][w]
        );
      }
      console.log(`${n} stuff, left capacity ${w}, most value ${dp[n][w]}`);
      console.log('')
    }
    console.log("\n");
  }

  return dp[N][W];
};

export default backpack_01;

/*****************************************************************************************************************************************************
[Question]
0 - 1背包问题：
有 N 件物品， 重量数组wt为[W1,W2,W3...]，价值数组为[V1,V2,V3...]
背包最大容量为W，求最大价值


[Comment]

********************************************************************************************************************************************************/
