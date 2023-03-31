# Prompt the user to enter a list of numbers separated by spaces
numbers = input("Enter a list of numbers separated by spaces: ").split()

# Initialize a variable to hold the sum of even numbers
sum = 0

# Iterate through each number in the input list
for number in numbers:
    # Check if the number is even
    if int(number) % 2 == 0:
        # If the number is even, add it to the sum
        sum = sum+int(number)

# Print the sum of all even numbers in the input list
print("The sum of all even numbers in the list is:", sum)

