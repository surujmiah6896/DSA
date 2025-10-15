
# decimal to binary
def decToBinary(decNum):
    ans = 0
    pow = 1

    while (decNum > 0):
        rem = decNum % 2
        decNum = decNum // 2
        ans += rem*pow
        pow *= 10
    
    return ans


print(decToBinary(50))


# binary to decimal


def binaryToDecimal(biNum):
    ans = 0
    pow = 1

    while (biNum > 0):
        rem = biNum % 10
        ans += rem * pow
        biNum //= 10
        pow *= 2

    return ans


print(binaryToDecimal(110010))
