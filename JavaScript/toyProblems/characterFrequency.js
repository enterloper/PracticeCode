function characterFrequency(string) {
    //necessary container variables
    var output = [];
    var letterCount = 0;
        var sortedCharacters = string.split("")
        .sort(function(a, b) {
            if (a.toLowerCase() > b.toLowerCase()) {return 1;}
            if (a.toLowerCase() < b.toLowerCase()) {return -1;}
            else {return 0;}
        });
    //conditional for user error
    if (string === undefined || string.length === 0) {
        return output;
    }
    //build framework for counting letter prominence
    for (var i = 0; i < sortedCharacters.length; i++) {
        letter = sortedCharacters[i];
        if (letter === sortedCharacters[i]) {
            letterCount++;
        }
        if (letter !== sortedCharacters[i + 1]) {
            output.push([sortedCharacters[i], letterCount]);
            letterCount = 0;
        }
    }
    return output.sort(function(a, b) {
        //by prominence of letter
        if (a[1] < b[1]) {return 1;}
        if (a[1] > b[1]) {return -1;}
        //by value of letter
        if (a[0] > b[0]) {return 1;}
        if (a[0] < b[0]) {return -1;}
        // a must be equal to b
        return 0;
    });;
}