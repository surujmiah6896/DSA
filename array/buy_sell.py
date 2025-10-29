prices = [7, 1, 5, 3, 6, 4]


def max_profit(prices):
    min_price = prices[0]
    print(min_price)
    max_profit = 0

    for price in prices:
        if price < min_price:
            min_price = price
        elif price - min_price > max_profit:
            max_profit = price - min_price

    return max_profit


print(max_profit(prices))