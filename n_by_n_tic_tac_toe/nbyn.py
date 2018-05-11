matrix = [["x","o",""],
          ["x","o",""],
          ["x","","x"]]

# helper method, this the main method to see the check for n by n

"""

Since this is a symmetrical matrix it is easy to check rows and columns

It doesn't matter what the size of the matrix is since we just have to check the length of the row
and compare the 2.

"""

def check_x_and_y(board):
    x = "".join(["x" for i in range(len(board))])
    y = "".join(["o" for i in range(len(board))])
    return (x,y)

# helper method for diagonal check
def diagonal_condition_check(result,check):
    if "".join(result) == check[0]:
        return "x"
    elif "".join(result) == check[1]:
        return "o"

"""
for checking rows
"""
def row_check(board):
    check = check_x_and_y(board)

    for row in board:
        joined_row = "".join(row)
        if joined_row == check[0]:
            return "x"
        elif joined_row == check[1]:
            return "o"

    return None

"""
for checking columns
"""
def vertical_check(board):
    transposed_matrix = zip(*board)
    return row_check(transposed_matrix)

"""
for checking straight diagonal
"""
def diagonal_check_1(board):
    check = check_x_and_y(board)
    result = []
    i = 0

    for row in board:
        result.append(row[i])
        i += 1

    return diagonal_condition_check(result, check)

"""
for checking reverse diagonal
"""
def diagonal_check_2(board):
    check = check_x_and_y(board)
    result = []
    i = len(board)-1

    for row in board:
        result.append(row[i])
        i -= 1

    return diagonal_condition_check(result, check)

def main(board):
    if row_check(board):
        print row_check(board)
    elif vertical_check(board):
        print vertical_check(board)
    elif diagonal_check_1(board):
        print diagonal_check_1(board)
    elif diagonal_check_2(matrix):
        print diagonal_check_2(board)
    else:
        print "draw"

main(matrix)
