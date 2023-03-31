#Calculator
while True:
    # Get user input for operation
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("0. Exit")
    choice = input("Enter choice (0/1/2/3/4): ")

    # Exit loop if user chooses 0
    if choice == '0':
        break

    # Get user input for numbers
    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
    except ValueError:
        print("Invalid input. Please enter a number.")
        continue

    # Perform operation based on user choice
    if choice == '1':
        print(num1, "+", num2, "=", (num1+num2))
    elif choice == '2':
        print(num1, "-", num2, "=", (num1-num2))
    elif choice == '3':
        print(num1, "*", num2, "=", (num1*num2))
    elif choice == '4':
        try:
            z = num1/ num2
            print(num1, "/", num2, "=", z)
        except ZeroDivisionError:
            print("Oops! Division by zero is not allowed.")
    else:
        print("Invalid choice. Please enter a valid choice (0/1/2/3/4).")
