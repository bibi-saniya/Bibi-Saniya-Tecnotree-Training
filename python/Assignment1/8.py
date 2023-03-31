names = input("Enter a list of names separated by spaces: ").split()
names.sort()

print("Names in alphabetical order:")
for name in names:
    print(name)
