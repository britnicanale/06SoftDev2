#Britni Canale  & Amit Narang
#SoftDev2 pd06
#K#22 - Closure
#2019-05-01

def repeat(str):
    def inner(num):
        return str*num
    return inner

def make_counter():
    num = [0]
    def count():
        num[0]+= 1
        return num[0]
    return count

print(make_counter())
ctr1 = make_counter()

print(ctr1())
print(ctr1())
print(ctr1())
print(ctr1())

ctr2 = make_counter90

print(ctr2())
