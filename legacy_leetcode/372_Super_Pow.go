package main

import (
	"fmt"
)

var base int = 1337

func pow(a int, b int) int {

	if b == 0 {
		return 1
	}
	a %= base

	if b%2 == 1 {
		res := (a * pow(a, b-1)) % base
		return res
	}
	sub := pow(a, b/2)
	res := (sub * sub) % base
	return res
}

func superPow(a int, b []int) int {
	if len(b) == 0 {
		return 1
	}

	lastIndex := len(b) - 1
	last := b[lastIndex]
	b = b[0:lastIndex]

	part1 := pow(a, last)
	part2 := pow(superPow(a, b), 10)
	return (part1 * part2) % base
}

func main() {
	s := []int{1, 2}
	fmt.Println(superPow(2, s))
}

/*****************************************************************************************************************************************************
Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.

Example 1:

Input: a = 2, b = [3]
Output: 8
Example 2:

Input: a = 2, b = [1,0]
Output: 1024


[comment]
1. (a * b) % k = (a % k)(b % k) % k
2.     superPow(a, [1,5,6,4])
   =>  superPow(a, [1,5,6])
*******************************************************************************************************