#Britni Canale
#SoftDev2 pd06
#K16: Do You Even List?
#2019-04-15

def goodPass(pw):
    good = [pw[x] for x in range(0, len(pw))]
    lower = False
    upper = False
    num = False
    print(good)
    for c in good:
        if c.islower():
            lower = True
        if c.isupper():
            upper = True
        if c.isdigit():
            num = True
    return lower and upper and num
print(goodPass("br4tni"))

def strength(pw):
    passStr = [pw[x] for x in range(0, len(pw))]
    lower = 0.0
    upper = 0.0
    num = 0.0
    char = 0.0
    for c in passStr:
        if c.islower():
            lower = 2.5
        if c.isupper():
            upper = 2.5
        if c.isdigit():
            num = 2.5
        if not c.isalnum():
            char = 2.5
    return lower + upper + num + char
print(strength("bR4tni!"))
