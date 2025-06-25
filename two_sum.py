my_array = [5, 2, 11, 7, 15]

# # brutef
# n = len(my_array)
# target = 9
# answer = []
# for i in range(n):
#     first_num = my_array[i]
#     for j in range(i + 1, n):
#         second_num = my_array[j]
#         sum = first_num + second_num
#         if sum == target:
#             answer.append(first_num)
#             answer.append(second_num)


# print("Answer is:", answer)


class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        hash_map = {}  

        for i, num in enumerate(nums):
            complement = target - num
            if complement in hash_map:
                return [hash_map[complement], i]
            hash_map[num] = i

        return []


solution = Solution()
nums = [5, 2, 11, 7, 15]
target = 9
result = solution.twoSum(nums, target)

# print(result)


my_hash = {}
my_hash[3] = 2
left, right = 1 + 1, 3 - 1
print(left, right)
