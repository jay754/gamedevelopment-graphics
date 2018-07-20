package main

import "fmt"
import "strings"

func transpose(board [][]string) [][]string {
  transposed_matrix := make([][]string, len(board))

  for row := 0; row < len(board); row++ {
    transposed_matrix[row] = make([]string, len(board))
  }

  for i := 0; i < 3; i++ {
    for j := 0; j < 3; j++ {
      transposed_matrix[i][j] = board[j][i]
    }
  }

  return transposed_matrix
}

func get_joined_strings(board [][]string, option string) string {
  s := make([]string, 0)
  for i := 0; i < len(board); i++ {
    s  = append(s, option)
  }

  s_joined := strings.Join(s[:],"")

  return s_joined
}

func check_x_and_y(board [][]string) []string {
  x := get_joined_strings(board, "x")
  y := get_joined_strings(board, "y")
  results := make([]string, 0)
  results = append(results, x)
  results = append(results, y)

  return results
}

func row_check(board [][]string) string {
  check := check_x_and_y(board)

  for _, element := range board {
    joined_element := strings.Join(element[:],"")

    if joined_element == check[0] {
      return "x"
    } else if joined_element == check[1] {
      return "o"
    }
  }

  return "no checks"
}

func vertical_check(board [][]string) string {
  transposed_matrix := transpose(board)
  return row_check(transposed_matrix)
}

func main() {
  board := [][]string{ {"x", "o", "x"},
                       {"x", "x", "x"},
                       {"x", "x", "o"}, }

  fmt.Println(vertical_check(board))
}
