leftPar = document.getElementById('leftPar')
rightPar = document.getElementById('rightPar')
add = document.getElementById('plus')
sub = document.getElementById('minus')
mult = document.getElementById('mult')
div = document.getElementById('div')
del = document.getElementById('del')
equals = document.getElementById('equals')
ans = document.getElementById('ans')
dec = document.getElementById('dec')
zero = document.getElementById('zero')
one = document.getElementById('one')
two = document.getElementById('two')
three = document.getElementById('three')
four = document.getElementById('four')
five = document.getElementById('five')
six = document.getElementById('six')
seven = document.getElementById('seven')
eight = document.getElementById('eight')
nine = document.getElementById('nine')

display = document.getElementById('display')

current = 0
ans = null
op = null

display.innerText = current

if (leftPar) {
	leftPar.addEventListener("click", function() {
		display.innerText = current
	});
}

if (rightPar) {
	rightPar.addEventListener('click', function() {
		display.innerText = current
	});
}

if (add) {
	add.addEventListener('click', function() {
		display.innerText = current
	});
}

if (sub) {
	sub.addEventListener('click', function() {
		display.innerText = current
	});
}

if (mult) {
	mult.addEventListener('click', function() {
		display.innerText = current

	});
}

if (div) {
	div.addEventListener('click', function() {
		display.innerText = current

	});
}

if (del) {
	del.addEventListener('click', function() {
		display.innerText = current

	});
}

if (equals) {
	equals.addEventListener('click', function() {
		display.innerText = current

	});
}

if (ans) {
	ans.addEventListener('click', function() {
		display.innerText = current

	});
}

if (dec) {
	dec.addEventListener('click', function() {
		display.innerText = current

	});
}

if (zero) {
	zero.addEventListener('click', function() {
		display.innerText = current

	});
}

if (one) {
	one.addEventListener('click', function() {
		display.innerText = current

	});
}

if (two) {
	two.addEventListener('click', function() {
		display.innerText = current

	});
}

if (three) {
	three.addEventListener('click', function() {
		display.innerText = current

	});
}

if (four) {
	four.addEventListener('click', function() {
		display.innerText = current

	});
}

if (five) {
	five.addEventListener('click', function() {
		display.innerText = current

	});
}

if (six) {
	six.addEventListener('click', function() {
		display.innerText = current

	});
}

if (seven) {
	seven.addEventListener('click', function() {
		display.innerText = current

	});
}

if (eight) {
	eight.addEventListener('click', function() {
		display.innerText = current

	});
}

if (nine) {
	nine.addEventListener('click', function() {
		display.innerText = current

	});
}