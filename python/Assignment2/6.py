# longest word in the list.

def find_longest_word(words):
    longest_word = ""
    for word in words:
        if len(word) > len(longest_word):
            longest_word = word
    return longest_word

words = ["apple", "banana", "pear", "grapefruit"]
longest_word = find_longest_word(words)
print(longest_word)