# Given a year, return the century it is in.

# The first century spans from the year 1 up to and including the year 100,
# the second - from the year 101 up to and including the year 200, etc.

# Some examples:
# century_from_year(1705) // returns 18
# century_from_year(1900) // returns 19
# century_from_year(1601) // returns 17
# century_from_year(2000) // returns 20


def century_from_year(year):
	initial_year = int(year / 100)
	return initial_year if year % 100 == 0 else initial_year + 1


print(century_from_year(1))
