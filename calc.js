leftPar = document.getElementById('(')
rightPar = document.getElementById(')')
add = document.getElementById('+')
sub = document.getElementById('-')
mult = document.getElementById('mult')
div = document.getElementById('div')
del = document.getElementById('del')
equals = document.getElementById('=')
ans = document.getElementById('ans')
dec = document.getElementById('dec')
zero = document.getElementById('0')
one = document.getElementById('1')
two = document.getElementById('2')
three = document.getElementById('3')
four = document.getElementById('4')
five = document.getElementById('5')
six = document.getElementById('6')
seven = document.getElementById('7')
eight = document.getElementById('8')
nine = document.getElementById('9')

display = []
last = null
operator = null

leftPar.addEventListener('click', function() {
	display.push('(')
	console.log(display)
});

rightPar.addEventListener('click', function() {
	display.push(')')
	console.log(display)
});

add.addEventListener('click', function() {
	display.push('+')
	console.log(display)
});

sub.addEventListener('click', function() {
	display.push('-')
	console.log(display)
});

mult.addEventListener('click', function() {
	display.push('*')
	console.log(display)
});

div.addEventListener('click', function() {
	display.push('/')
	console.log(display)
});

del.addEventListener('click', function() {
	display.pop()
	console.log(display)
});

equals.addEventListener('click', function() {
	display.push('=')
	console.log(display)
});

ans.addEventListener('click', function() {
	display.push('ANS')
	console.log(display)
});

dec.addEventListener('click', function() {
	display.push('.')
	console.log(display)
});

zero.addEventListener('click', function() {
	display.push('0')
	console.log(display)
});

one.addEventListener('click', function() {
	display.push('1')
	console.log(display)
});

two.addEventListener('click', function() {
	display.push('2')
	console.log(display)
});

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