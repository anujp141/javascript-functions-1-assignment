function numberAdder(num1, num2) {
    return num1 + num2;
}


const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const form = document.querySelector('form');


form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    
    const result = numberAdder(num1, num2);
    alert(`The sum of ${num1} and ${num2} is: ${result}`);
});
