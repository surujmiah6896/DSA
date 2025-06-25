for i in range(len(my_array)):
    max_index = i
    for j in range(len(my_array) - 1):
        if my_array[j] > my_array[max_index]:
            max_index = j

print("max value is :", my_array[max_index])
