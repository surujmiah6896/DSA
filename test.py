def printChe():
    n = 5
    for i in range(n):
        char = "A"
        for j in range(i):
            print(char, end="")
            char = chr(ord(char) + 1)
        print()

        
printChe()