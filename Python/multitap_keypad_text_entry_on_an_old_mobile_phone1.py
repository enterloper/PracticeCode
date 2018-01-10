# Write a module that can calculate the amount of button presses required for any phrase.
# Punctuation can be ignored for this exercise.
# Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters.

# some examples:
# "WHERE DO U WANT 2 MEET L8R" => 47
# "LOL" => 9
# "HOW R U" => 13


def presses(phrase):
	press_count = 0
	keypad = {
		"ABC2": ("A", "B", "C", "2"),
		"DEF3": ("D", "E", "F", "3"),
		"GHI4": ("G", "H", "I", "4"),
		"JKL5": ("J", "K", "L", "5"),
		"MNO6": ("M", "N", "O", "6"),
		"PQRS7": ("P", "Q", "R", "S", "7"),
		"TUV8": ("T", "U", "V", "8"),
		"WXYZ9": ("W", "X", "Y", "Z", "9")
	}

	for letter in phrase.upper():
		if letter == ' ':
			press_count += 1
		elif letter == "0":
					press_count += 2
		elif letter in "1#*":
					press_count += 1
		else:
			for collection in keypad:
				if letter in collection:
					press_count += collection.index(letter) + 1
	return press_count
