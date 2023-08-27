function calculate() {
    const numbersInput = document.getElementById('numbers').value;
    const numbersArray = numbersInput.split(',').map(num => parseInt(num.trim()));

    if (numbersArray.length < 2) {
        alert('Please enter at least two numbers separated by commas.');
        return;
    }

    const gcdResult = calculateGCD(numbersArray);
    const lcmResult = calculateLCM(numbersArray);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `GCD: ${gcdResult}<br>LCM: ${lcmResult}`;
}

function calculateGCD(numbers) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = gcd(result, numbers[i]);
    }
    return result;
}

function calculateLCM(numbers) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = lcm(result, numbers[i]);
    }
    return result;
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
