def test_factorial():
    assert factorial(5) == 120
def factorial(num):
    if num == 1:
        return 1
    else:
        return num * factorial(num-1)

# def factorial(num):
#     result = 1
#     for i in range(1, num+1):
#         result *= i
#     return result

# def test_factorial():
#     assert factorial(0) == 1
#     assert factorial(1) == 1
#     assert factorial(5) == 120
#     assert factorial(-1) == None
#     assert factorial(100) == 9332621544394415268169923885626670049071596826438162146859296389521759999322991560894146397615651828625369792082722375825118521091686400000000000000000000000