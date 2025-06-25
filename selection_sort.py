#
my_array = [64, 34, 25, 5, 22, 11, 90, 12]

n = len(my_array)

for i in range(n-1):
    min_index = i
    for j in range(i + 1, n):
        if my_array[j] < my_array[min_index]:   # value compear 
            min_index = j
    min_value = my_array.pop(min_index)
    my_array.insert(i, min_value)

print("sorted array", my_array)

# explain selection sort
# 1. this loop continue n-1
# 2. first index is min value
# 3. 2nd loop continue first loop (index + 1 to n)
# 4. check 2nd loop 1st element is small to 1st loop 1st element and set min index
# 5. remove remove and store min_value
# 6. insert 1st loop index wise min value
# final print this array