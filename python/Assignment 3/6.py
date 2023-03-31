
theBoard={'top-l':' ','top-m':' ','top-r':' ',
          'mid-l':' ','mid-m':' ','mid-r':' ',
          'low-l':' ','low-m':' ','low-r':' '}

def printboard(board):
    print(board['top-l']+ ' | ' + board['top-m'] + ' | ' + board['top-r'])
    print('- + - + - ')
    print(board['mid-l']+ ' | ' + board['mid-m'] + ' | ' + board['mid-r'])
    print('- + - + - ')
    print(board['low-l']+ ' | ' + board['low-m'] + ' | ' + board['low-r'])

def checkwin(board):
    # Check rows
    if board['top-l'] == board['top-m'] == board['top-r'] != ' ':
        return True
    elif board['mid-l'] == board['mid-m'] == board['mid-r'] != ' ':
        return True
    elif board['low-l'] == board['low-m'] == board['low-r'] != ' ':
        return True
    # Check columns
    elif board['top-l'] == board['mid-l'] == board['low-l'] != ' ':
        return True
    elif board['top-m'] == board['mid-m'] == board['low-m'] != ' ':
        return True
    elif board['top-r'] == board['mid-r'] == board['low-r'] != ' ':
        return True
    # Check diagonals
    elif board['top-l'] == board['mid-m'] == board['low-r'] != ' ':
        return True
    elif board['top-r'] == board['mid-m'] == board['low-l'] != ' ':
        return True
    else:
        return False

def checktie(board):
    for key in board:
        if board[key] == ' ':
            return False
    return True

turn='X'
for i in range(9):
    printboard(theBoard)
    print('Turn for '+ turn +' Move on which space?')
    move=input()
    theBoard[move]=turn
    if checkwin(theBoard):
        printboard(theBoard)
        print('Congratulations! Player ' + turn + ' wins!')
        break
    elif checktie(theBoard):
        printboard(theBoard)
        print("It's a tie!")
        break
    if turn == 'X':
        turn = 'O'
    else:
        turn = 'X'