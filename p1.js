var subtractProductAndSum = function (n) {
  let pro = 1;
  let sum = 0;

  while (n > 0) {
    const r = n % 10;
    pro *= r;
    sum += r;
    n = Math.floor(n / 10);
  }

  return pro - sum;
};
