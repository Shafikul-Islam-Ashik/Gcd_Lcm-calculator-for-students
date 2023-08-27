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
    const factorizations = calculatePrimeFactorizations(numbersArray);

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

  // factorizations display 
    const factorizationsElement = document.getElementById('factorizations');   
      //init
      let factorizedNums = '';
      
      for (let i = 0; i < numbersArray.length; i++) {
        factorizedNums += `
          ${numbersArray[i]} = ${factorizations[i]}<br>`;
      }
     
    factorizationsElement.innerHTML =`<div class="result"> ${factorizedNums} </div>`; 
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

//factorizations 
function calculatePrimeFactorizations(numbers) {
    const factorizations = [];
    for (let i = 0; i < numbers.length; i++) {
        factorizations.push(getPrimeFactorization(numbers[i]));
    }
    return factorizations;
}

function getPrimeFactorization(number) {
    let factorization = '';
    let divisor = 2;

    while (number > 1) {
        if (number % divisor === 0) {
            factorization += divisor + ' ';
            number /= divisor;
        } else {
            divisor++;
        }
    }
    
    const factors = factorization.trim().split(' ');
    
    return factors.join(' &times; ');
}
