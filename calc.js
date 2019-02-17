leftPar = document.getElementById('leftPar')
rightPar = document.getElementById('rightPar')
add = document.getElementById('plus')
sub = document.getElementById('minus')
mult = document.getElementById('mult')
div = document.getElementById('div')
clr = document.getElementById('clr')
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

stowed = null
last = ''
op = null
flag = true;

display.innerText = current

leftPar.addEventListener("click", function() {
    current = append(current, '(')
    display.innerText = current
});

rightPar.addEventListener('click', function() {
    current = append(current, ')')
    display.innerText = current
});

add.addEventListener('click', function() {
    current = append(current, '+')
    display.innerText = current
});

sub.addEventListener('click', function() {
    current = append(current, '-')
    display.innerText = current
});

mult.addEventListener('click', function() {
    current = append(current, '*')
    display.innerText = current
});

div.addEventListener('click', function() {
    current = append(current, '/')
    display.innerText = current
});

clr.addEventListener('click', function() {
    current = 0
    display.innerText = current
});

equals.addEventListener('click', function() {
    current = eval(current)
    last = current
    flag = true
    display.innerText = current
});

ans.addEventListener('click', function() {
    if (last != null) {
        current = append(current, last)
    }
    display.innerText = current
});

dec.addEventListener('click', function() {
    current = append(current, '.')
    display.innerText = current
});

zero.addEventListener('click', function() {
    if (flag) {
        current = append(current, 0)
        flag = !flag

    }

    display.innerText = current
});

one.addEventListener('click', function() {
    if (flag) {
        current = 1
        flag = !flag
    } else {
        current = append(current, 1);
    }

    display.innerText = current
});

two.addEventListener('click', function() {
    if (flag) {
        current = 2

        flag = !flag
    } else {
        current = append(current, 2);
    }

    display.innerText = current
});

three.addEventListener('click', function() {
    if (flag) {
        current = 3
        flag = !flag
    } else {
        current = append(current, 3);
    }

    display.innerText = current
});

four.addEventListener('click', function() {
    if (flag) {
        current = 4

        flag = !flag

    } else {
        current = append(current, 4);
    }

    display.innerText = current
});

five.addEventListener('click', function() {
    if (flag) {
        current = 5
        flag = !flag
    } else {
        current = append(current, 5);
    }

    display.innerText = current
});

six.addEventListener('click', function() {
    if (flag) {
        current = 6
        flag = !flag
    } else {
        current = append(current, 6);
    }

    display.innerText = current
});

seven.addEventListener('click', function() {
    if (flag) {
        current = 7
        flag = !flag
    } else {
        current = append(current, 7);
    }

    display.innerText = current
});

eight.addEventListener('click', function() {
    if (flag) {
        current = 8
        flag = !flag
    } else {
        current = append(current, 8);
    }

    display.innerText = current
});

nine.addEventListener('click', function() {
    if (flag) {
        current = 9
        flag = !flag
    } else {
        current = append(current, 9);
    }

    display.innerText = current
});

function append(a, b) {
    return a.toString() + b.toString();
}
