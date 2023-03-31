numbers = input("Enter a list of numbers separated by spaces: ").split()

sum = 0

for number in numbers:
    if int(number) % 2 == 0:
        sum = sum+int(number)

print("The sum of all even numbers in the list is:", sum)
