function FirstReverse(str){
	return str.split("").reverse().join("");
}

function SimpleAdding(num){
	if(num < 0){
		return 0;
	}
	if(num === 1){
		return 1;
	}
	else {
		return num+simpleAdding(num-1);
	}
}

Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

	function LetterChanges(str){
		var strArray = str.split("");
		var modArray = [];
		function nextLetter(letter, index, array){
			if(letter.toLowerCase() === 'z'){
				modArray.push('A');
			}
			else if(/[dhnt]/i.test(letter)){
				modArray.push(String.fromCharCode(letter.codePointAt(0)+1).toUpperCase());
			}
		}
	}

	String.fromCharCode("a".codePointAt(0)+1);