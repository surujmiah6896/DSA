n = 5

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
# num = n * (n + 1) // 2
# for i in range(n, 0, -1):
#     for j in range(i):
#         print(num, end=" ")
#         num -= 1
#     print()

# inverted triangle pattern
# p = 1
# for i in range(n):
#     for j in range(i):
#         print(p, end="")
#     p += 1
#     print()

# pyramid pattern
# for i in range(n):
#     for j in range(n - i - 1):
#         print(" ", end="")
#     for k in range(2 * i + 1):
#         print("*", end="")
#     print()

# pyramid number pattern
for i in range(n):
    for j in range(n - i - 1):
        print(" ", end="")
    for k in range(2 * i + 1):
        print(i + 1, end="")
    print()

# pyramid number reverse pattern
for i in range(n):
    for j in range(n - i - 1):
        print(" ", end="")
    for k in range(2 * i + 1):
        print(n - i, end="")
    print()

# pyramid number updown pattern
for i in range(n):
    for j in range(n - i - 1):
        print(" ", end="")
    for k in range(i + 1):
        print(k + 1, end="")
    for l in range(i, 0, -1):
        print(l, end="")
    print() 
