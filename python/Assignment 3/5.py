import random

# Define a list of questions and answers
questions = [
    {
        "question": " Which of the given cities is located on the bank of river Ganga?",
        "choices": ["A. Patna", "B. Gwalior", "C. Bhopal", "D. Mathura"],
        "answer": "A"
    },
    {
        "question": "What is the pH value of the human body?",
        "choices": ["A. 9.2 to 9.8", "B. 7.0 to 7.8", "C. 6.1 to 6.3", "D. 5.4 to 5.6"],
        "answer": "B"
    },
    {
        "question": "OS abbrevation usually means?",
        "choices": ["A. order of significance", "B. open software", "C. operating syatem", "D. optical sensor"],
        "answer": "B"
    },
    {
        "question": "Which of the given vitamin is a water-soluble vitamin?",
        "choices": ["A. Vitamin A", "B. Vitamin B", "C. Vitamin K", "D. Vitamin D"],
        "answer": "B"
    }
]

# Define function to ask a question and get user input
def ask_question(question):
    print(question["question"])
    for choice in question["choices"]:
        print(choice)
    answer = input("Enter your answer (A, B, C, or D): ")
    return answer.upper()

# Define function to play the quiz game
def play_quiz():
    score = 0
    random.shuffle(questions)
    for question in questions:
        user_answer = ask_question(question)
        if user_answer == question["answer"]:
            print("Correct!")
            score += 1
        else:
            print(f"Incorrect. The correct answer is {question['answer']}.")
    print(f"\nYour final score is {score} out of {len(questions)}.")

# Call the play_quiz() function to start the game
play_quiz()