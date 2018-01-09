# We want to know the index of the vowels in a given word.
# For example, there are two vowels in the word super (the second and fourth letters).
# So given a string "super", we should return a list of [2, 4].
# Super => [2,4]
# Apple => [1,5]
# YoMama => [1,2,4,6]


def vowel_indices(word):
	return [index for index, value in enumerate(word, 1) if value.lower() in 'aeiouy']
