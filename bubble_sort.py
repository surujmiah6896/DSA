my_array = [64, 34, 25, 12, 22, 11, 90, 5]

# n = len(my_array)
# for i in range(n-1):
#     for j in range(n-i-1):
#         if my_array[j] > my_array[j+1]:
#             my_array[j], my_array[j+1] = my_array[j+1], my_array[j]

# print("Sorted array:", my_array)

for i in range(len(my_array)):
    max_index = i
    for j in range(len(my_array) - 1):
        if my_array[j] > my_array[max_index]:
            max_index = j

print("max value is :", my_array[max_index])
