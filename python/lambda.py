#A simple example of a lambda function that squares a number:
num1 = float(input("Enter first number: "))
square = lambda num1: num1**2

# call the lambda function
result = square(num1)

# print the result
print(result)

x=lambda a:a+10
print(x(5))

s=lambda b:b+10-5
print(s(7))
