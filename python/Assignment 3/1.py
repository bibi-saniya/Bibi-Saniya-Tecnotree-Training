#to do list
# Open the to-do list file in append mode
with open('todo.txt', 'a') as f:
    pass

# Define a function to read the to-do list from the file
def read_todo_list():
    with open('todo.txt', 'r') as f:
        todo_list = f.read().splitlines()
    return todo_list

# Define a function to add an item to the to-do list
def add_todo_item(item):
    with open('todo.txt', 'a') as f:
        f.write(item + '\n')

# Define a function to remove an item from the to-do list
def remove_todo_item(item):
    todo_list = read_todo_list()
    if item in todo_list:
        todo_list.remove(item)
        with open('todo.txt', 'w') as f:
            for todo_item in todo_list:
                f.write(todo_item + '\n')
    else:
        print("Item not found in to-do list.")

# Define a function to update an item in the to-do list
def update_todo_item(old_item, new_item):
    todo_list = read_todo_list()
    if old_item in todo_list:
        index = todo_list.index(old_item)
        todo_list[index] = new_item
        with open('todo.txt', 'w') as f:
            for todo_item in todo_list:
                f.write(todo_item + '\n')
    else:
        print("Item not found in to-do list.")

# Define a function to display the to-do list
def display_todo_list():
    todo_list = read_todo_list()
    if len(todo_list) == 0:
        print("To-do list is empty.")
    else:
        print("To-do list:")
        for i, todo_item in enumerate(todo_list):
            print(f"{i+1}. {todo_item}")

# Define a function to prompt the user for a to-do list item
def get_todo_item():
    item = input("Enter a to-do item: ")
    return item

# Define a function to prompt the user for an item to remove
def get_item_to_remove():
    item = input("Enter the item to remove: ")
    return item

# Define a function to prompt the user for an item to update
def get_item_to_update():
    old_item = input("Enter the item to update: ")
    new_item = input("Enter the new item: ")
    return old_item, new_item

# Main loop
while True:
    # Display the main menu
    print("Main menu:")
    print("1. Add item")
    print("2. Remove item")
    print("3. Update item")
    print("4. Display list")
    print("5. Quit")
    ch = input("Enter your choice: ")

    # Process the user's choice
    if ch == '1':
        item = get_todo_item()
        add_todo_item(item)
    elif ch == '2':
        item = get_item_to_remove()
        remove_todo_item(item)
    elif ch == '3':
        old_item, new_item = get_item_to_update()
        update_todo_item(old_item, new_item)
    elif ch == '4':
        display_todo_list()
    elif ch == '5':
        break
    else:
        print("Invalid choice. Please try again.")


# #without file
# tasks = []

# def add_task():
#     task = input("Enter a new task: ")
#     tasks.append(task)
#     print("Task added.")

# def remove_task():
#     if len(tasks) == 0:
#         print("No tasks to remove.")
#     else:
#         print("Tasks:")
#         for i, task in enumerate(tasks):
#             print(f"{i+1}. {task}")
#         task_num = int(input("Enter the number of the task to remove: "))
#         del tasks[task_num-1]
#         print("Task removed.")

# def list_tasks():
#     if len(tasks) == 0:
#         print("No tasks.")
#     else:
#         print("Tasks:")
#         for i, task in enumerate(tasks):
#             print(f"{i+1}. {task}")

# while True:
#     print("Menu:")
#     print("1. Add task")
#     print("2. Remove task")
#     print("3. List tasks")
#     print("4. Exit")
#     choice = int(input("Enter your choice: "))
#     if choice == 1:
#         add_task()
#     elif choice == 2:
#         remove_task()
#     elif choice == 3:
#         list_tasks()
#     elif choice == 4:
#         break
#     else:
#         print("Invalid choice.")

