function createChessBoard() {
	var chessBoard = document.createElement('div');
	var div = document.createElement('div');
	div.style.height='50px';
	div.style.width='50px';
	div.style.color='red';
	for (var i=1; i<=8; i++) {
	for(var j=1; j<=8; j++)
		if (i%2==1) 
			if (j%2==1) { 
				var whiteCell = createCell('#fff'); 
				chessBoard.appendChild(whiteCell); 
			}
			else { 
				var blackCell = createCell('#888'); 
				chessBoard.appendChild(blackCell); 
			}
		else if (j%2==1) { 
			var blackCell = createCell('#888');
			chessBoard.appendChild(blackCell); 
			}
		else { 
			var whiteCell = createCell('#fff'); 
			chessBoard.appendChild(whiteCell); 
			}
	var div = document.createElement('div');
	div.style.clear = 'left';
	chessBoard.appendChild(div);
	}
	chessBoard.style.margin = '0 auto';
	chessBoard.style.width = '800px';
	chessBoard.style.border = '50px solid silver';
	chessBoard.setAttribute('id','chessBoard');
	chessBoard = setAllCellsAddress(chessBoard);
	return chessBoard;
}

function createCell(color) {
	var div = document.createElement('div');
	div.style.backgroundColor = color;
	div.style.width = '100px';
	div.style.height = '100px';
	div.style.border = '2px solid '+color;
	div.style.boxSizing = 'border-box';
	div.style.float = 'left';
	return div;
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
		chessBoard.childNodes[i].innerHTML = blackChessFiguresArray[i];
	}
	for (var i=8; i<16; i++) {
		chessBoard.childNodes[i+1].innerHTML = blackChessFiguresArray[i];
	}
	for (var i=54; i<62; i++) {
		chessBoard.childNodes[i].innerHTML = whiteChessFiguresArray[i-54];
	}
	for (var i=63; i<71; i++) {
		chessBoard.childNodes[i].innerHTML = whiteChessFiguresArray[i-55];
	}
	for(var i=0; i<71; i++) {
		chessBoard.childNodes[i].style.textAlign = 'center';
		chessBoard.childNodes[i].style.fontSize = '80px';
		chessBoard.childNodes[i].style.lineHeight = '100px';
	}
	return chessBoard;
}

function setAllCellsAddress(chessBoard) {
		var addressArray = [ 'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8',
							 'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7',
							 'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6',
							 'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5',
							 'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4',
							 'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3',
							 'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
							 'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1']
		for(var i=0; i<8; i++) {
			chessBoard.childNodes[i].setAttribute('id',addressArray[i]);
			chessBoard.childNodes[i+9].setAttribute('id',addressArray[i+8]);
			chessBoard.childNodes[i+18].setAttribute('id',addressArray[i+16]);
			chessBoard.childNodes[i+27].setAttribute('id',addressArray[i+24]);
			chessBoard.childNodes[i+36].setAttribute('id',addressArray[i+32]);
			chessBoard.childNodes[i+45].setAttribute('id',addressArray[i+40]);
			chessBoard.childNodes[i+54].setAttribute('id',addressArray[i+48]);
			chessBoard.childNodes[i+63].setAttribute('id',addressArray[i+56]);
		}
	return chessBoard;
}

function selectCell(chessBoard) {
	for (var i=0; i<71; i++)
		chessBoard.childNodes[i].addEventListener('click', function() {		if (chessBoard.getElementsByClassName('selected').length!=0) {
																				chessBoard.getElementsByClassName('selected')[0].style.borderColor = chessBoard.getElementsByClassName('selected')[0].style.backgroundColor;
																				if (chessBoard.getElementsByClassName('prevSelected').length!=0) {
																				chessBoard.getElementsByClassName('prevSelected')[0].removeAttribute('class'); }
																					chessBoard.getElementsByClassName('selected')[0].setAttribute('class','prevSelected');
																					var array = chessBoard.getElementsByClassName('prevSelected');
																					console.log(array);
																			}
																			this.setAttribute('class', 'selected');
																			this.style.border = '2px solid red';		
																	  });
	return chessBoard;
}

// function moveFigure(chessBoard) {
	// for (var i=0; i<71; i++)
		// chessBoard.childNodes[i].addEventListener('click', function() {		if (chessBoard.getElementsByClassName('selected').length!=0 && chessBoard.getElementsByClassName('selected')[].innerHTML!='') {
																				// this.innerHTML=chessBoard.getElementsByClassName('selected')[1]
																	  // });
	// return chessBoard;
// }

window.onload = function() {
	document.body.style.background = '#555';
	var chessBoard = createChessBoard();
	chessBoard = addNotation(chessBoard);
	document.body.appendChild(chessBoard);
	chessBoard = addFigures(chessBoard);
	chessBoard = selectCell(chessBoard);
	//chessBoard = moveFigure(chessBoard);
}