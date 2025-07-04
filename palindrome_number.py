class Solution:
    def isPalindrome(self, x: int) -> bool:
        return str(x) == str(x)[::-1]
    
    def isPalindrome2(self, x: int) -> bool:
        if x < 0 or (x != 0 and x % 10 == 0):
            return False
        rev = 0
        while x > rev:
            rev = rev * 10 + x % 10
            print("rev", rev)
            x //= 10
            print("x", x)
        return x == rev or x == rev // 10


x = 121
# if 121 < 0 or (121 != 0 and 121 % 10 == 0):
#     print(False)
# rev = 0
# while 121 > rev:
#     rev = rev * 10 + 121 % 10
#     121 //= 10
# print(121 == rev or 121 == rev // 10)
# print(Solution().isPalindrome(x))  # Output: True

# Example usage:
# if __name__ == "__main__":


solution = Solution()
print(solution.isPalindrome(121))  # Output: True
print(solution.isPalindrome(-121))  # Output: False
print(solution.isPalindrome(10))   # Output: False
print(solution.isPalindrome(12321))  # Output: True
print(solution.isPalindrome(0))    # Output: True
print(solution.isPalindrome(1234321))  # Output: True
print(solution.isPalindrome(123456))  # Output: False
print(solution.isPalindrome(1001))  # Output: True
print(solution.isPalindrome(123456789987654321))  # Output: True

n = 123432125

s = str(n)
middle_digit = int(s[len(s)//2])
print(121 // 10) 
r = 121 
r //= 10
f = r
print(f)

print("---------------------------------")
solution2 = Solution()
print(solution2.isPalindrome2(12321))  # Output: True
# print(solution2.isPalindrome2(-121)) # Output: False
# print(solution2.isPalindrome2(10))   # Output: False
# print(solution2.isPalindrome2(12321)) # Output: True

