arr = [2, 7, 11, 15]
target = 26

# this is raw approach with loop


def two_sum_brute_force(arr, target):
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):  
            if arr[i] + arr[j] == target:
                return [i, j]
    return []


print(two_sum_brute_force(arr, target))

# Time Complexity: O(n²)
# Space Complexity: O(1) - excluding output array

# Issues with current approach:

# Inefficient for large arrays

# Duplicate pairs might be added


# Hash Map- O(n) time
# arr = [2, 7, 11, 15]


def tow_sum_optimized(arr, target):
    num_map = {}
    
    for i, num in enumerate(arr):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []


print(tow_sum_optimized(arr, target))


# tow sum and sorted

def tow_sum_sorted(arr, target):
    indexed_arr = [(val, idx) for idx, val in enumerate(arr)]
    indexed_arr.sort()  # Sort by value
    print(indexed_arr)
    left, right = 0, len(arr) - 1

    while left < right:
        current_sum = indexed_arr[left][0] + indexed_arr[right][0]
        if current_sum == target:
            return [indexed_arr[left][1], indexed_arr[right][1]]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return []


print(tow_sum_sorted(arr, target))
