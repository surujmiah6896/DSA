# sort of 0, 1, 2s in o(n) time and o(1) space
def sort012(arr):
    low = 0
    mid = 0
    high = len(arr) - 1

    while mid <= high:
        if arr[mid] == 0:
            arr[low], arr[mid] = arr[mid], arr[low]
            low += 1
            mid += 1
        elif arr[mid] == 1:
            mid += 1
        else:  # arr[mid] == 2
            arr[mid], arr[high] = arr[high], arr[mid]
            high -= 1

    return arr


print(sort012([0, 1, 2, 0, 1, 2, 1, 0]))
print(sort012([2, 2, 1, 0, 1, 0, 2, 1, 0]))
print(sort012([1, 0, 1, 2, 0, 1, 2, 0, 2]))