#Doggos - Britni Canale & Damian Wasilewicz
# SoftDev2 pd6
# K#19 -- Ready, Set, Math!
# 2019-04-17  
#Union
# def union(A,B):
#     A.append(B)
#     u = [x for x in A if x not in u]
#     return u
#
# A = [1,2,3]
# B = [2,3,4]
#
# print(union(A,B))

A = [1,2,3]
B = [2,3,4]

#set difference
def setDifference(U, A):
    return [x for x in U if x not in A]
print("Set Difference")
print(setDifference(A,B))


#symmetric setDifference
def symDiff(A, B):
    # A.append(B)
    # return [x for x in A if x not in union(A, B)]
    return setDifference(A, B) + setDifference(B, A)
print("Symmetric Difference")
print(symDiff(A, B))


#intersection
def intersection(A,B):
    return [x for x in A if x in B]
print("Intersection")
print(intersection(A,B))


#Bad Union
def badUnion(A, B):
    return symDiff(A,B) + intersection(A,B)
print("Bad Union")
print(badUnion(A,B))


#cartesian product
def cartProd(A, B):
    return [(x, y) for x in A for y in B]
print("Cartesian Product")
print(cartProd(A, B))

def powerSet(A):
    return [()] + [(x) for x in A] + [(x,y) for x in A for y in A]
print("Power Set")
print(powerSet(A))
