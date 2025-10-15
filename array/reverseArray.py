arr = [1, 3, 4, 5, 6, 8, 90, 43]

# this is 2 point approach


def reverseArray(array):
    arrLength = len(array)
    start = 0
    end = arrLength - 1

    while start < end:
        print('start', start)
        print('end', end)
        array[start], array[end] = array[end], array[start]
        start += 1
        end -= 1
    
    print(array)
    return array


reverseArray(arr)