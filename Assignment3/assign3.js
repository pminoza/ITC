document.addEventListener("DOMContentLoaded", () => {
    const calcFactorial = document.getElementById("factorialId");
    const calcSumOfN = document.getElementById("sumId");
    const calcAverage = document.getElementById("averageId");

   
    const factorialInput = document.getElementById("factorialInput");
    const sumInput = document.getElementById("sumInput");
    const averageInput = document.getElementById("averageInput");


    const factorialOutput = document.getElementById("factorialOutput");
    const sumOutputText = document.getElementById("sumOutputText");
    const sumOutputNumber = document.getElementById("sumOutputNumber");
    const averageOutputText = document.getElementById("averageOutputText");
    const averageOutputNumber = document.getElementById("averageOutputNumber");

    calcFactorial.addEventListener("click", () => {
        const n = parseFloat(factorialInput.value);
        let result = 1;

        if (isNaN(n) || n < 0) {
            factorialOutput.innerText = "Please enter a valid number";
            return;
        }

        let i = n;
        while (i > 1) {
            result *= i;
            i--;
        }

        factorialOutput.innerText = `${n}! = ${result}`;
    });

    calcSumOfN.addEventListener("click", () => {
        const n = parseFloat(sumInput.value);

        if (isNaN(n) || n < 0) {
            sumOutputText.innerText = "Please enter a valid number";
            sumOutputNumber.innerText = "";
            return;
        }

        let result = 0;
        for (let i = 1; i <= n; i++) {
            result += i;
        }

        sumOutputText.innerText = `Sum of the first ${n} numbers is:`;
        sumOutputNumber.innerText = result;
    });

    
    calcAverage.addEventListener("click", () => {
        const n = parseFloat(averageInput.value);

        // check invalid input
        if (isNaN(n) || n < 0) {
            averageOutputText.innerText = "Please enter a valid number";
            averageOutputNumber.innerText = "";
            return;
        }

        let result = 0;
        for (let i = 1; i <= n; i++) {
            result += i;
        }

        result /= n;

        averageOutputText.innerText = `Average of the first ${n} numbers is:`;
        averageOutputNumber.innerText = result;
    });



    // Event listeners to clear output when input is empty
    factorialInput.addEventListener("input", () => {
        if (factorialInput.value === "") factorialOutput.innerText = "";
    });

    sumInput.addEventListener("input", () => {
        if (sumInput.value === "") {
            sumOutputText.innerText = "Sum of the first N numbers is:";
            sumOutputNumber.innerText = "";
        }
    });

    averageInput.addEventListener("input", () => {
        if (averageInput.value === "") {
            averageOutputText.innerText = "Average of the first N numbers is:";
            averageOutputNumber.innerText = "";
        }
    });
});