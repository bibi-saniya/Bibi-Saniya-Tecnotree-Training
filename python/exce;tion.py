num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))


try:
    
    z = num1/ num2
    print(z)
except ZeroDivisionError:
        print("Oops! Division by zero is not allowed.")