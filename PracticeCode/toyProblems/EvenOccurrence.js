function evenOccurence(arr) {
    var arrClone = arr.slice();
    
    for (var i = 0; i < arr.length; i++) {
        var temp = arrClone[i];
        var result = arr.filter(function(x) { if (temp === x){ return x; } });
        if (result.length % 2 === 0) { return result[0]; }
    }
    return null;
}