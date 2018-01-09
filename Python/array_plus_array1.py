# Get the sum of two arrays.
# Actually the sum of all their elements.

# Each array includes only integer numbers. Output is a number too.
# EXAMPLES:
# array_plus_array([1, 2, 3], [4, 5, 6]) => 21
# array_plus_array([0, 0, 0], [4, 5, 6]) => 15
# array_plus_array([100, 200, 300], [400, 500, 600]) => 2100


def array_plus_array(arr1, arr2):
	for number in arr2:
		arr1.append(number)
	summary = 0
	for number in arr1:
		summary += number
	return summary
