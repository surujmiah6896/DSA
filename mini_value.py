my_array = [7, 12, 9, 4, 11]
minval = my_array[0]
for i in my_array:
    if i < minval:
        minval = i

print("lowest value: " ,minval)
