# Given a number n, return the number of positive odd numbers below n, EASY!

# oddCount(7) //=> 3, i.e [1, 3, 5]
# oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
# oddCount(15023) //=> 7511


def odd_count(n):
	array_of_odds = []
	number = 0
	while number < n:
		if number % 2 != 0:
			array_of_odds.append(number)
		number += 1
	return len(array_of_odds)
