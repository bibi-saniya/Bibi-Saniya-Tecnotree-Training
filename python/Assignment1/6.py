numbers = input("Enter a list of numbers separated by spaces: ").split()
numbers = [int(num) for num in numbers]

smallest = min(numbers)
largest = max(numbers)

print("Smallest number:", smallest)
print("Largest number:", largest)
