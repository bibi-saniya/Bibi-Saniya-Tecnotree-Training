
#//Demo Example of file handling in Python that demonstrates how to open a file, read its contents, and write to it:

# Opening a file
#file = open('Demo.txt', 'r')

# Reading from a file
#content = file.read()
#print(content)

# Closing a file
#file.close()

# Writing to a file
with open('mo.txt', 'a') as file:
    file.write('\nSaniya')
    
# Reading from a file again
with open('Demo.txt', 'r') as file:
    content = file.read()
    print(content)

