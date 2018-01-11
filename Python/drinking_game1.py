# Mike and Joe are fratboys that love beer and games that involve drinking.
# They play the following game: Mike chugs one beer, then Joe chugs 2 beers, then Mike chugs 3 beers, and so on.
# Once someone can't drink what he is supposed to drink, he loses.
# Mike can chug at most A beers in total (otherwise he would pass out), while Joe can chug at most B beers in total.
# Who will win the game?
# Return the winner "Mike" or "Joe", for any given integer values of A & B.
# Note: If either Mike or Joe cannot drink at least 1 beer, return the string "Non-drinkers can't play".
# Some Examples:
# game(3,2) => "Joe"
# game(4,2) => "Mike"
# game(9,1000) => "Joe"
# game(0,1) => "Non-drinkers can't play"


def game(a, b):
	if a < 1 or b < 1: return "Non-drinkers can't play"
	mikes_drinks = a
	joes_drinks = b
	for index in range(a+b):
		drinks = index + 1
		if index % 2 == 0:
			if mikes_drinks < drinks: return 'Joe'
			mikes_drinks -= drinks
		else:
			if joes_drinks < drinks: return 'Mike'
			joes_drinks -= drinks
