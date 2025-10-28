arr = [2, 2, 1, 1, 1, 2, 2]


def get_majority_element(arr):
    max = len(arr) // 2
    print(max)

    for i in range(len(arr)):
        freq = 1
        for j in range(i + 1, len(arr)):
            if i != j and arr[i] == arr[j]:
                freq += 1
        print(freq)
        if freq > max:
            return arr[i]
    return None


print('result', get_majority_element(arr))


def get_majority_dictionary(arr):
    max = len(arr) // 2
    freq = {}
    for i in arr:
        print('i', i)
        print('get', freq.get(i, 0))
        freq[i] = freq.get(i, 0) + 1
        print('freq', freq)
        if freq[i] > max:
            return i
    return None


print('dictionay', get_majority_dictionary(arr))