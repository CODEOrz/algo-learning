package main

import (
	"fmt"
)

// func countPrimes(n int) int {
// 	if n <= 2 {
// 		return 0
// 	}

// 	primesSet := []int{2}

// 	for i := 3; i < n; i++ {
// 		for j := 0; (j < len(primesSet)) && (primesSet[j]*primesSet[j] <= i+1); j++ {
// 			if i%primesSet[j] == 0 {
// 				break
// 			}
// 			if (j == len(primesSet)-1) || (primesSet[j+1]*primesSet[j+1] > i+1) {
// 				primesSet = append(primesSet, i)
// 			}
// 		}
// 	}
// 	return len(primesSet)
// }

// func countPrimes(n int) int {
// 	isPrim := []bool{}
// 	for i := 0; i < n; i++ {
// 		isPrim = append(isPrim, true)
// 	}

// 	for i := 2; i*i < n; i++ {
// 		if isPrim[i] {
// 			for j := i * i; j < n; j += i {
// 				isPrim[j] = false
// 			}
// 		}
// 	}

// 	count := 0
// 	for i := 2; i < n; i++ {
// 		if isPrim[i] {
// 			count++
// 		}
// 	}
// 	return count
// }

func countPrimes(n int) int {
	isPrim := make([]bool, n)

	for i := 2; i*i < n; i++ {
		if !isPrim[i] {
			for j := i * i; j < n; j += i {
				isPrim[j] = true
			}
		}
	}

	count := 0
	for i := 2; i < n; i++ {
		if !isPrim[i] {
			count++
		}
	}
	return count
}

func main() {
	fmt.Println(countPrimes(10000000))
}
