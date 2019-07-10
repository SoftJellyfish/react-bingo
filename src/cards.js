var usedNums = new Array(25);

function newCard() {
    var i = 0;

    while (i <= 25) {
        setValue(i);
        i++;
    }
}

function setValue(thisSquare) {
	var currSquare = "square"+thisSquare;
	var newNum;
	
	var colPlace =new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
	
	do {
		newNum =(colPlace[thisSquare] * 15) + getNewNum() + 1;
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum() {
	return Math.floor(Math.random() * 25);	
}

function anotherCard() {
    var i = 1;
    
    while (i < usedNums.length) {
        usedNums[i] = false;
        i++;
    }
    	
	newCard();
}