n = 10

# for i in range(n):
#     for j in range(i + 1):
#         print("*", end="")
#     print()

# # reverse triangle
# for i in range(n, 0, -1):
#     for j in range(i):
#         print("* ", end="")
#     print()

# floyd's triangle
# num = 1
# for i in range(n):
#     for j in range(i + 1):
#         print(num, end=" ")
#         num += 1
#     print()

# inverted floyd's triangle
num = n * (n + 1) // 2
for i in range(n, 0, -1):
    for j in range(i):
        print(num, end=" ")
        num -= 1
    print()