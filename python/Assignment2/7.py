# list of numbers and returns a new list with only the prime numbers.

def get_primes(numbers):
    primes = []
    for num in numbers:
        if num > 1:
            for i in range(2, int(num/2)+1):
                if (num % i) == 0:
                    break
            else:
                primes.append(num)
    return primes

numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
prime_numbers = get_primes(numbers)
print(prime_numbers)