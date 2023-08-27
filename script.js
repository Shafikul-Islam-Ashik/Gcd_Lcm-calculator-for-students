function calculate() {
  // get input value
    const numbersInput = document.getElementById('numbers').value;
    
    // numbers into array
    const numbersArray = numbersInput.split(',').map(num => parseInt(num.trim()));

    if (numbersArray.length < 2) {
        alert('Please enter at least two numbers separated by commas.');
        return;
    }

    const gcdResult = calculateGCD(numbersArray);
    const lcmResult = calculateLCM(numbersArray);

// display result 
    const resultElement = document.getElementById("result_wrapper");
    resultElement.innerHTML = `
        <div class="result">
           <div class="gcd">
                <h4>GCD :</h4>
                <h4>${gcdResult}</h4>
           </div> 
          <div class = "lcm">
            <h4>LCM :</h4>
            <h4> ${lcmResult} </h4> 
          </div>
      </div>`;
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
