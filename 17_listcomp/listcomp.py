#Team BCAN -- Britni Canale & Amit Narang
#p06 SoftDev2
#K17: PPFTLCW
#2019-04-15

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
    #divs = []
    #for x in range(1,n):
    #    if float(n/x) == int(n/x):
    #        divs.append(x)
    divs = [x for x in range(1,n+1) if float(n)/float(x)== int(n/x)]
    return divs
print(divisors(20))
print(divisors(9))

def isTrip(c):
    for a in range(1,c):
        b = math.sqrt(float(c**2) - float(a**2))
        if b == int(b):
            return (a, int(b), c)
    return (0, 0, 0)

def pythag(n):
    #trips = []
    #for c in range(1, n+1):
    #    if isTrip(c)[0] !=0:
    #        trips.append(isTrip(c))
    triplets = [isTrip(c) for c in range(1, n+1) if isTrip(c)[0] != 0]
    return triplets
print(pythag(25))

def pythagOne(n):
    trips = [(a, int(math.sqrt(float(c**2) - float(a**2))), c) for c in range (1, n+1) for a in range(1, c) if math.sqrt(float(c**2) - float(a**2)) == int(math.sqrt(float(c**2) - float(a**2)))]
print("One line")
print(pythagOne(25))

def transpose(A):
    B = [[x[n] for x in A] for n in range(0, len(A))]
    return B

A = [[1,2, 3],[4, 5, 6],[7,8,9]]

print("transpose")
print(transpose(A))
    
