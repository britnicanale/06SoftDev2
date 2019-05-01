import random

def memoize(f):
    memo={}
    def helper(x):
        nonlocal memo
        memo[x] = f(x)
        return f(x)
    return helper

@memoize
def fib(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fib(n-1) + fib(n-2)

print(fib(5))
