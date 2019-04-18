# def frequency(word):
#     freq = 0
#     for x in words:
#         if x == word:
#             freq++
#     return freq

# with open("book.txt", 'r') as file:
#     words = [word for line in file for word in line.split()]

words = ["hello", "my", "name", "is", "Britni", "Britni", "it", "is"]

# def frequency(word):
#     freq = reduce((lambda x, y: [x]+[y] if y == word else [x]), words)
#     return freq

def frequency(word):
    freq = reduce((lambda x, y: x+[y]), words)
    return freq

# def frequency(word):
#     total = 0
#     freq = reduce((lambda x,y : total++ if x == word), words)
#     return freq





print(frequency("Britni"))
