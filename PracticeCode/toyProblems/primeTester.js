function primeTester(n) {
    var max = Math.floor(Math.sqrt(n));
    if (n === 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    for (var i = 2; i <= max; i++){
        if (n % i === 0) {
            return false;
        }
	}return true;
}