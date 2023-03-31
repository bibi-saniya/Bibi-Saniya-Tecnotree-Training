#Hangman game
import random

words = ['python', 'java', 'javascript', 'html', 'css']
secret_word = random.choice(words)
guessed = ['_' for _ in secret_word]
max = 6
num_guesses = 0
while num_guesses < max and '_' in guessed:
    print(' '.join(guessed))

    guess = input('Guess a letter: ').lower()
    
    if guess in secret_word:
        for i, letter in enumerate(secret_word):
            if letter == guess:
                guessed[i] = letter
        print('Correct!')
    else:
        print('Incorrect!')
        num_guesses += 1
    
    
    print(f'Guesses remaining: {max - num_guesses}')
    
if '_' not in guessed:
    print('Congratulations, you guessed the word!')
else:
     print(f'Sorry, you ran out of guesses. The word was "{secret_word}".')