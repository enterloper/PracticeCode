# Given a number n, return the number of positive odd numbers below n, EASY!

# oddCount(7) //=> 3, i.e [1, 3, 5]
# oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
# oddCount(15023) //=> 7511


def odd_count(n):
	number = 1
	count = 0
	while number < n:
		count += 1
		number += 2

	return count
