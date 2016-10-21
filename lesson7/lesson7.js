function createChessBoard() {
	var wrapper = document.createElement('div');
	var div = document.createElement('div');
	div.style.height='50px';
	div.style.width='50px';
	div.style.color='red';
	for (var i=1; i<=8; i++) {
	for(var j=1; j<=8; j++)
		if (i%2==1) 
			if (j%2==1) { 
				var whiteCell = createCell('#fff'); 
				wrapper.appendChild(whiteCell); 
			}
			else { 
				var blackCell = createCell('#888'); 
				wrapper.appendChild(blackCell); 
			}
		else if (j%2==1) { 
			var blackCell = createCell('#888');
			wrapper.appendChild(blackCell); 
			}
		else { 
			var whiteCell = createCell('#fff'); 
			wrapper.appendChild(whiteCell); 
			}
	var div = document.createElement('div');
	div.style.clear = 'left';
	wrapper.appendChild(div);
	}
	wrapper.style.margin = '0 auto';
	wrapper.style.width = '800px';
	wrapper.style.border = '50px solid silver';
	wrapper.setAttribute('id','chessBoard');
	return wrapper;
}

function createCell(color) {
	var divWhite = document.createElement('div');
	divWhite.style.backgroundColor = color;
	divWhite.style.width = '100px';
	divWhite.style.height = '100px';
	divWhite.style.float = 'left';
	return divWhite;
}

function addNotation(chessBoard) {
	var numberNotationDiv = document.createElement('div');
	numberNotationDiv.style.width = '50px';
	for(var i=8; i>=1; i--) {
		var currentRow = document.createElement('div');
		var currentNumber = document.createElement('span');
		currentNumber.innerText = i;
		currentRow.appendChild(currentNumber);
		currentRow.style.height = '100px';
		currentRow.style.textAlign = 'center';
		currentNumber.style.position='relative';
		currentNumber.style.top='40%';
		numberNotationDiv.appendChild(currentRow);
	}
	var letterNotationDiv = document.createElement('div');
	letterNotationDiv.style.height = '50px';
	for(var i=1; i<=8; i++) {
		var currentColumn = document.createElement('div');
		var currentLetter = document.createElement('span');
		currentLetter.innerHTML = '&#'+(96+i);;
		currentColumn.appendChild(currentLetter);
		currentColumn.style.float='left';
		currentColumn.style.width = '100px';
		currentColumn.style.textAlign = 'center';
		letterNotationDiv.appendChild(currentColumn);
	}
	chessBoard.appendChild(numberNotationDiv);
	numberNotationDiv.style.position = 'relative';
	numberNotationDiv.style.top = '-800px';
	numberNotationDiv.style.left = '-50px';
	chessBoard.appendChild(letterNotationDiv);
	letterNotationDiv.style.position = 'relative';
	letterNotationDiv.style.top = '-788px';
	chessBoard.style.height = '800px';
	return chessBoard;
}

function addFigures(chessBoard) {
	blackChessFiguresArray = [
		'&#9820',
		'&#9822',
		'&#9821',
		'&#9819',
		'&#9818',
		'&#9821',
		'&#9822',
		'&#9820',
		'&#9823',
		'&#9823',
		'&#9823',
		'&#9823',
		'&#9823',
		'&#9823',
		'&#9823',
		'&#9823'
	]
	whiteChessFiguresArray = [
		'&#9817',
		'&#9817',
		'&#9817',
		'&#9817',
		'&#9817',
		'&#9817',
		'&#9817',
		'&#9817',
		'&#9814',
		'&#9816',
		'&#9815',
		'&#9813',
		'&#9812',
		'&#9815',
		'&#9816',
		'&#9814'
	]
	for (var i=0; i<8; i++) {
		document.getElementById('chessBoard').childNodes[i].innerHTML = blackChessFiguresArray[i];
	}
	for (var i=8; i<16; i++) {
		document.getElementById('chessBoard').childNodes[i+1].innerHTML = blackChessFiguresArray[i];
	}
	for (var i=54; i<62; i++) {
		document.getElementById('chessBoard').childNodes[i].innerHTML = whiteChessFiguresArray[i-54];
	}
	for (var i=63; i<71; i++) {
		document.getElementById('chessBoard').childNodes[i].innerHTML = whiteChessFiguresArray[i-55];
	}
	for(var i=0; i<71; i++) {
		document.getElementById('chessBoard').childNodes[i].style.textAlign = 'center';
		document.getElementById('chessBoard').childNodes[i].style.fontSize = '80px';
		document.getElementById('chessBoard').childNodes[i].style.lineHeight = '100px';
	}
}

window.onload = function() {
	document.body.style.background = '#555';
	var chessBoard = createChessBoard();
	chessboard = addNotation(chessBoard);
	document.body.appendChild(chessBoard);
	chessboard = addFigures(chessBoard);
}