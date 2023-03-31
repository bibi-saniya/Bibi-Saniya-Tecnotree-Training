#new list with only the strings that are palindromes.
def filter_palindromes(words): 
    palindromes = []
    for word in words:
        if word == word[::-1]:
            palindromes.append(word)
    return palindromes

my_words = ["ABCBA", "hello", "level", "world", "Saniya" , "malayalam"]
print(filter_palindromes(my_words))