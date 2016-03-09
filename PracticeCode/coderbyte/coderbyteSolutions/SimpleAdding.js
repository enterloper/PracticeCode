
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