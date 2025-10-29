height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

# Brute force approach 
#  note: this approach has a time complexity of O(n^2) so it is not efficient for large inputs and not allowed leetcode


def max_area_brute_force(height):
    max_area = 0

    for i in range(len(height)):
        for j in range(i + 1, len(height)):
            height = min(height[i], height[j]) 
            width = (j - i)
            current_area = height * width
            if current_area > max_area:
                max_area = current_area

    return {"max_area": max_area}


print(max_area_brute_force(height))


# Two pointer approach
# This approach has a time complexity of O(n) and is more efficient for large inputs.

def max_area(height):
    max_area = 0
    left = 0
    right = len(height) - 1

    while left < right:
        current_area = min(height[left], height[right]) * (right - left)

        max_area = max(max_area, current_area)

        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return {"max_area": max_area, "left_max": height[left], "right_max": height[right], "width": right - left}


print(max_area(height))