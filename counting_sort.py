def countingSort(arr):
    max_val = max(arr)
    print('max_val', max_val)
    count = [0] * (max_val + 1)
    print("count", count)

    while len(arr) > 0:
        num = arr.pop(0)
        print("num", num)
        count[num] += 1
        print("count+", count)

    print("len(count)", len(count))
    for i in range(len(count)):
        print("i", i)
        while count[i] > 0:
            arr.append(i)
            count[i] -= 1
            print("count", count)

    return arr


unsortedArr = [4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3]
sortedArr = countingSort(unsortedArr)
print("Sorted array:", sortedArr)
