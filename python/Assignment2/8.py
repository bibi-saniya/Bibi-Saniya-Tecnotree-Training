#number of times each letter appears in the string.

def count_letters(string):
    letter_counts = {}
    for char in string:
        if char not in letter_counts:
            letter_counts[char] = 1
        else:
            letter_counts[char] += 1
    return letter_counts

my_string = input("Enter a string: ")
letter_counts = count_letters(my_string)
for letter, count in letter_counts.items():
    print("{}: {}".format(letter, count))