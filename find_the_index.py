class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        # check needle
        if not needle:
            return 0
        # loop for find index
        for i in range(len(haystack) - len(needle) + 1):
            if haystack[i:i+len(needle)] == needle:
                # return index
                return i

        return -1


#  Example usage:
solution = Solution()
print(solution.strStr("hello", "ll"))    # Output: 2