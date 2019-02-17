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
		console.log(test)
	});
}

if(rightPar){
rightPar.addEventListener('click', function() {
	current.push(')')
	console.log(current)
});
}

if(add){
add.addEventListener('click', function() {
	current.push('+')
	console.log(current)
});
}

if(sub){
sub.addEventListener('click', function() {
	current.push('-')
	console.log(current)
});
}

if(mult){
mult.addEventListener('click', function() {
	current.push('*')
	console.log(current)
});
}

if(div){
div.addEventListener('click', function() {
	current.push('/')
	console.log(current)
});
}

if(del){
del.addEventListener('click', function() {
	current.pop()
	console.log(current)
});
}

if(equals){
equals.addEventListener('click', function() {
	current.push('=')
	console.log(current)
});
}

if(ans){
ans.addEventListener('click', function() {
	current.push('ANS')
	console.log(current)
});
}

if(dec){
dec.addEventListener('click', function() {
	current.push('.')
	console.log(current)
});
}

if(zero){
zero.addEventListener('click', function() {
	current.push('0')
	console.log(current)
});
}

if(one){
one.addEventListener('click', function() {
	current.push('1')
	console.log(current)
});
}

if(two){
two.addEventListener('click', function() {
	current.push('2')
	console.log(current)
});
}

if(three){
three.addEventListener('click', function() {
	current.push('3')
	console.log(current)
});
}

if(four){
four.addEventListener('click', function() {
	current.push('4')
	console.log(current)
});
}

if(five){
five.addEventListener('click', function() {
	current.push('5')
	console.log(current)
});
}

if(six){
six.addEventListener('click', function() {
	current.push('6')
	console.log(current)
});
}

if(seven){
seven.addEventListener('click', function() {
	current.push('7')
	console.log(current)
});
}

if(eight){
eight.addEventListener('click', function() {
	current.push('8')
	console.log(current)
});
}

if(nine){
nine.addEventListener('click', function() {
	current.push('9')
	console.log(current)
});
}
