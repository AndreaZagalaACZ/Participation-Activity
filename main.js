//JavaScript Conditionals
/* function identify_sign() {
    num1 = document.getElementById("input1").value;

    if (num1 > 0) {
        document.getElementById('output').innerHTML = ' It is positive';
    } else if (num1 == 0) {
        document.getElementById('output').innerHTML = 'It is zero';
    }
    else {
        document.getElementById('output').innerHTML = 'It is negative';
    }
} */
function odd_or_even() {
    num1 = document.getElementById("input1").value;

    if(num1 % 2 == 0) {
        window.alert('Even');
    }
    else {
        window.alert('Odd');
    }
}
