#new list with the elements squared.
def square_list(numbers):
    squared_list = []
    for number in numbers:
        squared_list.append(number ** 2)
    return squared_list

my_numbers = [1, 2, 3, 4, 5]
print(square_list(my_numbers))