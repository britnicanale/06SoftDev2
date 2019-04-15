import math

one = [str(x*2)*2 for x in range(5)]
print(one)

two = [7 + 10*x for x in range(5)]
print(two)

three = [x*c for c in range(3) for x in range(3)]
print(three)

prime = [x for x in range(100) if all(x % y != 0 for y in range(2,int(math.sqrt(x))+1))]
print(prime)

comp = [x for x in range(100) if x not in prime]
print(comp)

def divisors(n):
    #divs = [x for x in range(1,n) if float(n/x)== int(n/x)]
    return divs
print(divisors(20))
