# Get the sum of two arrays.
# Actually the sum of all their elements.

# Each array includes only integer numbers. Output is a number too.
# EXAMPLES:
# array_plus_array([1, 2, 3], [4, 5, 6]) => 21
# array_plus_array([0, 0, 0], [4, 5, 6]) => 15
# array_plus_array([100, 200, 300], [400, 500, 600]) => 2100


def array_plus_array3(arr1, arr2):
	return sum(arr1 + arr2)
