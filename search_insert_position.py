def search_insert(nums, target):
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = (left + right) // 2

        if nums[mid] == target:
            return mid  # target found
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    # target not found, left is the insert position
    return left
