#Python program that defines a class to represent a bank account:
#This is just a simple example, and you can modify and customize the class and its methods to suit your needs.

class BankAccount:
    
    def __init__(self):
        self.balance = 0
    
    def deposit(self, amount):
        self.balance += amount
        print("Deposit of", amount, "completed.")
        
    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
            print("Withdrawal of", amount, "completed.")
        else:
            print("Insufficient balance.")
    
    def print_balance(self):
        print("Current balance:", self.balance)

# create an instance of BankAccount
account = BankAccount()

# deposit some money
account.deposit(1000)

# withdraw some money
account.withdraw(500)

# try to withdraw more money than the balance
account.withdraw(1000)

# print the balance
account.print_balance()




