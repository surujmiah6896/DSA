my_array = [64, 34, 25, 12, 22, 11, 90, 5]
for i in range(len(my_array)):
    max_index = i
    for j in range(len(my_array) - 1):
        if my_array[j] > my_array[max_index]:
            max_index = j

print("max value is :", my_array[max_index])
