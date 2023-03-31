numbers = input("Enter a list of numbers separated by spaces: ").split()
numbers = [int(num) for num in numbers]

# Use lambda function to filter out even numbers
filtered_numbers = list(filter(lambda x: x % 2 != 0, numbers))

# Use list comprehension to double the remaining odd numbers
doubled_numbers = [x * 2 for x in filtered_numbers]

print(doubled_numbers)