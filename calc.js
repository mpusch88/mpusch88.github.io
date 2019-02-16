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

current = []
last = null
operator = null

if (leftPar) {
	leftPar.addEventListener('click', function() {
		display.push('(')
		console.log(display)
	});
}

if(rightPar){
rightPar.addEventListener('click', function() {
	display.push(')')
	console.log(display)
});
}

if(add){
add.addEventListener('click', function() {
	display.push('+')
	console.log(display)
});
}

if(sub){
sub.addEventListener('click', function() {
	display.push('-')
	console.log(display)
});
}

if(mult){
mult.addEventListener('click', function() {
	display.push('*')
	console.log(display)
});
}

if(div){
div.addEventListener('click', function() {
	display.push('/')
	console.log(display)
});
}

if(del){
del.addEventListener('click', function() {
	display.pop()
	console.log(display)
});
}

if(equals){
equals.addEventListener('click', function() {
	display.push('=')
	console.log(display)
});
}

if(ans){
ans.addEventListener('click', function() {
	display.push('ANS')
	console.log(display)
});
}

if(dec){
dec.addEventListener('click', function() {
	display.push('.')
	console.log(display)
});
}

if(zerp){
zero.addEventListener('click', function() {
	display.push('0')
	console.log(display)
});
}

if(one){
one.addEventListener('click', function() {
	display.push('1')
	console.log(display)
});
}

if(two){
two.addEventListener('click', function() {
	display.push('2')
	console.log(display)
});
}


three.addEventListener('click', function() {
	display.push('3')
	console.log(display)
});

four.addEventListener('click', function() {
	display.push('4')
	console.log(display)
});

five.addEventListener('click', function() {
	display.push('5')
	console.log(display)
});

six.addEventListener('click', function() {
	display.push('6')
	console.log(display)
});

seven.addEventListener('click', function() {
	display.push('7')
	console.log(display)
});

eight.addEventListener('click', function() {
	display.push('8')
	console.log(display)
});

nine.addEventListener('click', function() {
	display.push('9')
	console.log(display)
});