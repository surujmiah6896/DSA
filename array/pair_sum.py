arr = [2, 7, 11, 15]
target = 9

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
