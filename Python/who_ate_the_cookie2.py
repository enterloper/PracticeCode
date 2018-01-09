# For this problem you must create a program that says who ate the last cookie.
# If the input is a string then "Zach" ate the cookie.
# If the input is a float or an int then "Monica" ate the cookie.
# If the input is anything else "the dog" ate the cookie.
# The way to return the statement is: "Who ate the last cookie? It was (name)!"
# Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach!

def cookie(x):
	who = {int: 'Monica', float: 'Monica', str: 'Zach'}
	culprit = who[type(x)] if type(x) in who else 'the dog'
	return "Who ate the last cookie? It was {}!".format(culprit)
