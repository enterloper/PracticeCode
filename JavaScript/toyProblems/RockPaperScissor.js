function rockPaperPermutation(roundCount) {
    if (roundCount === 0) return [];
    if (roundCount === 1) return ['r', 'p', 's'];
    return [].concat.apply(
        [],
        rockPaperPermutation(roundCount - 1)
        .map(function(e) {
            return [e + 'r', e + 'p', e + 's'];
        }));
}