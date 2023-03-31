string = input("Enter a string: ")
len= len(string)
print("The length of the string is :",len)

first = string[0]
last= string[-1]
print("The first character of the string is "+first)
print("The last character of the string is "+last)

reverse = string[::-1]
print("The string in reverse order is "+reverse)