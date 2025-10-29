# nums = [1, 2, 3, 4]


# def product_except_self(nums):

#     """
#     Given an array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

#     Args:
#     nums (List[int]): List of integers.

#     Returns:
#     List[int]: List where each element is the product of all other elements in nums.
#     """
#     length = len(nums)
#     answer = [1] * length

#     # Calculate left products
#     left_product = 1
#     for i in range(length):
#         print(i)
#         answer[i] = left_product
#         print('before', left_product)
#         left_product *= nums[i]
#         print('after', left_product)


#     # Calculate right products and multiply with left products
#     right_product = 1
#     for i in range(length - 1, -1, -1):
#         print(i)
#         answer[i] *= right_product
#         right_product *= nums[i]

#     return answer


# print(product_except_self(nums))



# # alternative approach using division (not allowed if nums contains zero)
# def product_except_self_division(nums):
#     total_product = 1
#     zero_count = 0

#     for num in nums:
#         if num != 0:
#             total_product *= num
#         else:
#             zero_count += 1

#     result = []
#     for num in nums:
#         if zero_count > 1:
#             result.append(0)
#         elif zero_count == 1:
#             if num == 0:
#                 result.append(total_product)
#             else:
#                 result.append(0)
#         else:
#             result.append(total_product // num)

#     return result