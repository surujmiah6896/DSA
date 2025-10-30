nums = [-1, 0, 3, 5, 9, 12]
target = -1

# Basic binary search implementation
# leetcode 704


def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1


print("Element found at index:", binary_search(nums, target))

# rotated sorted array search
# leetcode 33


def binary_search_rotated(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        if arr[low] <= arr[mid]:
            if arr[low] <= target and target < arr[mid]:
                high = mid - 1
            else:
                low = mid + 1
        else:
            if arr[mid] < target and target <= arr[high]:
                low = mid + 1
            else:
                high = mid - 1
    return -1


result_rotated = binary_search_rotated([4, 5, 6, 7, 0, 1, 2], 0)
print("Element found at index in rotated array:", result_rotated)

# rotated sorted array search with duplicates
# leetcode 81


def binary_search_rotated_with_duplicates(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return True
        if arr[low] == arr[mid] == arr[high]: 
            low += 1
            high -= 1
        elif arr[low] <= arr[mid]:
            if arr[low] <= target < arr[mid]:
                high = mid - 1
            else:
                low = mid + 1
        else:
            if arr[mid] < target <= arr[high]:
                low = mid + 1
            else:
                high = mid - 1
    return False        


print("Element found with duplicates:", binary_search_rotated_with_duplicates([2, 5, 6, 0, 0, 1, 2], 0))


# peak index in a mountain array
# leetcode 852
def binary_search_peak_element(arr):
    low = 0
    high = len(arr) - 1
    while low < high:
        mid = (low + high) // 2
        if arr[mid] < arr[mid + 1]:
            low = mid + 1
        else:
            high = mid
    return low


print("Peak element found at index:", binary_search_peak_element([0, 2, 1, 0]))

# binary_search_rotated_get_lowest_point
# leetcode 153


def binary_search_rotated_get_lowest_point(arr):
    low = 0
    high = len(arr) - 1
    
    while low < high:
        mid = (low + high) // 2
        if arr[mid] < arr[high]:
            high = mid
        else:
            low = mid + 1
    return arr[low]


print("Lowest point in rotated array is:", binary_search_rotated_get_lowest_point([4, 5, 6, 7, 0, 1, 2]))

# find minimum in rotated sorted array with duplicates
# leetcode 154


def binary_search_rotated_get_lowest_point_with_duplicates(arr):
    low = 0
    high = len(arr) - 1
    
    while low < high:
        mid = (low + high) // 2
        if arr[mid] < arr[high]:
            high = mid
        elif arr[mid] > arr[high]:
            low = mid + 1
        else:
            high -= 1
    return arr[low]


# single Element in a sorted array
# leetcode 540
def binary_search_single_element(arr):
    low = 0
    high = len(arr) - 1
    while low < high:
        mid = (low + high) // 2
        if mid % 2 == 1:  # make mid even 
            mid -= 1
        if arr[mid] == arr[mid + 1]:
            low = mid + 2
        else:
            high = mid
    return arr[low]

print("Single element in sorted array is--:", binary_search_single_element([1,1,2,3,3,4,4,8,8]))

# single element in a sorted array approach 2
# leetcode 540


def binary_search_single_element2(arr):
    if len(arr) == 1:
        return arr[0]
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if mid == 0 and arr[0] != arr[1]:
            return arr[0]
        if mid == len(arr) - 1 and arr[len(arr)-1] != arr[len(arr)-2]:
            return arr[mid]
        if arr[mid-1] != arr[mid] and arr[mid] != arr[mid + 1]:
            return arr[mid]
        if mid % 2 == 0:
            if arr[mid - 1] == arr[mid]:
                high = mid - 1
            else:
                low = mid + 1
        else:
            if arr[mid - 1] == arr[mid]:
                low = mid + 1
            else:
                high = mid - 1
    return -1


print("Single element in sorted array (approach 2) is:", binary_search_single_element2([1, 1, 2, 3, 3, 4, 4, 8, 8]))
# low = 0
# high = len(arr) - 1
# while low <= high:
#     mid = (low + high) // 2
#     if arr[mid] == target:
#         return True
#     if arr[low] == arr[mid] == arr[high]:
#         low += 1
#         high -= 1
#     elif arr[low] <= arr[mid]:
#         if arr[low] <= target < arr[mid]:
#             high = mid - 1
#         else:
#             low = mid + 1
#     else:
#         if arr[mid] < target <= arr[high]:
#             low = mid + 1
#         else:
#             high = mid - 1
# return False

# Recursive binary search
# def binary_search_recursive(arr, target, low, high):
#     if low > high:
#         return -1
#     mid = (low + high) // 2
#     if arr[mid] == target:
#         return mid
#     elif arr[mid] < target:
#         return binary_search_recursive(arr, target, mid + 1, high)
#     else:
#         return binary_search_recursive(arr, target, low, mid - 1)

# result_recursive = binary_search_recursive(nums, target, 0, len(nums) - 1)
# print("Element found at index (recursive):", result_recursive)

# def binary_search_first_occurrence(arr, target):
#     low = 0
#     high = len(arr) - 1
#     result = -1
#     while low <= high:
#         mid = (low + high) // 2
#         if arr[mid] == target:
#             result = mid
#             high = mid - 1  # Continue searching in the left half
#         elif arr[mid] < target:
#             low = mid + 1
#         else:
#             high = mid - 1
#     return result

# result_first = binary_search_first_occurrence([1, 2, 2, 2, 3, 4], 2)
# print("First occurrence of element found at index:", result_first)

# def binary_search_last_occurrence(arr, target):
#     low = 0
#     high = len(arr) - 1
#     result = -1
#     while low <= high:
#         mid = (low + high) // 2
#         if arr[mid] == target:
#             result = mid
#             low = mid + 1  # Continue searching in the right half
#         elif arr[mid] < target:
#             low = mid + 1
#         else:
#             high = mid - 1
#     return result   

# result_last = binary_search_last_occurrence([1, 2, 2, 2, 3, 4], 2)
# print("Last occurrence of element found at index:", result_last)

# def binary_search_insert_position(arr, target):
#     low = 0
#     high = len(arr)
#     while low < high:
#         mid = (low + high) // 2
#         if arr[mid] < target:
#             low = mid + 1
#         else:
#             high = mid
#     return low
# result_insert = binary_search_insert_position([1, 3, 5, 6], 5)
# print("Insert position of element is:", result_insert)


# def binary_search_insert_position_not_found(arr, target):
#     low = 0
#     high = len(arr) - 1
#     while low <= high:
#         mid = (low + high) // 2
#         if arr[mid] == target:
#             return mid
#         elif arr[mid] < target:
#             low = mid + 1
#         else:
#             high = mid - 1
#     return low

# result_insert_not_found = binary_search_insert_position_not_found([1, 3, 5, 6], 2)
# print("Insert position of element (not found case) is:", result_insert_not_found)

# def binary_search_rotated_recursive(arr, target, low, high):
#     if low > high:
#         return -1
#     mid = (low + high) // 2
#     if arr[mid] == target:
#         return mid
#     if arr[low] <= arr[mid]:  # Left half is sorted
#         if arr[low] <= target < arr[mid]:
#             return binary_search_rotated_recursive(arr, target, low, mid - 1)
#         else:
#             return binary_search_rotated_recursive(arr, target, mid + 1, high)
#     else:  # Right half is sorted
#         if arr[mid] < target <= arr[high]:
#             return binary_search_rotated_recursive(arr, target, mid + 1, high)
#         else:
#             return binary_search_rotated_recursive(arr, target, low, mid - 1)   

# result_rotated_recursive = binary_search_rotated_recursive([4,5,6,7,0,1,2], 0, 0, 6)
# print("Element found at index in rotated array (recursive):", result_rotated_recursive)
# def binary_search_peak_element(arr):
#     low = 0
#     high = len(arr) - 1
#     while low < high:
#         mid = (low + high) // 2
#         if arr[mid] < arr[mid + 1]:
#             low = mid + 1
#         else:
#             high = mid
#     return low
# result_peak = binary_search_peak_element([1,2,1,3,5,6,4])
# print("Peak element found at index:", result_peak)
# def binary_search_peak_element_recursive(arr, low, high):
#     if low == high:
#         return low
#     mid = (low + high) // 2
#     if arr[mid] < arr[mid + 1]:
#         return binary_search_peak_element_recursive(arr, mid + 1, high)
#     else:
#         return binary_search_peak_element_recursive(arr, low, mid)
# result_peak_recursive = binary_search_peak_element_recursive([1,2,1,3,5], 0, 4)
# print("Peak element found at index (recursive):", result_peak_recursive)
