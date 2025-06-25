my_array = [5, 2, 11, 7, 15]

# # brutef
n = len(my_array)
target = 9
answer = []
for i in range(n):
    first_num = my_array[i]
    for j in range(i + 1, n):
        second_num = my_array[j]
        sum = first_num + second_num
        if sum == target:
            answer.append(first_num)
            answer.append(second_num)


print("Answer is:", answer)
