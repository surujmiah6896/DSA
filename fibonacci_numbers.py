# write with loop
# num1 = 0
# num2 = 1

# print(num1)
# print(num2)
# for fibo in range(18):
#     newfibo = num2 + num1
#     print(newfibo)
#     num1 = num2
#     num2 = newfibo

# write with recursion

# print(0)
# print(1)

# count = 2

# def fibonacci(num1, num2):
#     global count
#     if count <= 19:
#         newfibo = num2 + num1
#         print(newfibo)
#         num1 = num2
#         num2 = newfibo
#         count += 1
#         fibonacci(num1, num2)
#     else:
#         return
    
# fibonacci(0,1)


# def F(n):
#     if n <= 1:
#         return n
#     else:
#         return F(n - 1) + F(n - 2)

# print(F(19))

# mylist = [1,2,3,4,5,6,9,7,10,11,14,12,15]
# n = len(mylist)

# for i in mylist:
#     if i > maxnum:
#         maxnum = i


my_array = [64, 34, 25, 12, 22, 11, 90, 5]

n = len(my_array)
print("total if list:",n)
for i in range(n-1):
    print("first i:",i)
    print("n-i-1:",n-i-1)
    for j in range(n-i-1):
        print("second j:",j)
        print("second result:", my_array[j])
        if my_array[j] > my_array[j+1]:
            print("my_array[j], my_array[j+1]:",my_array[j], my_array[j+1])
            my_array[j], my_array[j+1] = my_array[j+1], my_array[j]

print("Sorted array:", my_array)