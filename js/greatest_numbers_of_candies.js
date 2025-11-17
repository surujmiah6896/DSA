var kidsWithCandies = function (candies, extraCandies) {
  let maxCandies = candies[0];
  const result = [];
  for (let i = 0; i < candies.length; i++) {
    if (maxCandies < candies[i]) {
      maxCandies = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    const totalCandiesOfKids = candies[i] + extraCandies;
    if (totalCandiesOfKids >= maxCandies) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};
