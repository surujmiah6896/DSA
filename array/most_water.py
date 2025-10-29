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


