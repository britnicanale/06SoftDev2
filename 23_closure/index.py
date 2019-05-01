import random

def make_HTML_heading(f):
    def inner():
        return '<h1>' + f() + '</h1>'
    return inner

def greet():
    greetings = ['wassup', 'hola senor', 'doggo!', 'ayyyy', 'welcome sir']
    return random.choice(greetings)

greet_heading = make_HTML_heading

print(greet_heading(greet)())
print(greet_heading(greet)())
print(greet_heading(greet)())
print(greet_heading(greet)())
print(greet_heading(greet)())

greet_heading2 = make_HTML_heading(greet)
print(greet_heading2())
print(greet_heading2())
print(greet_heading2())
print(greet_heading2())
