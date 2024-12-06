document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("ti");
    const taxPayableField = document.getElementById("tp");

    inputField.addEventListener("keyup", () => {
        const taxableIncome = parseFloat(inputField.value);
        let incomeTax = 0;

        // Validate input
        if (isNaN(taxableIncome) || taxableIncome <= 0) {
            taxPayableField.innerText = "Invalid input";
            return;
        }

        // Calculate tax
        if (taxableIncome >= 8000000) {
            incomeTax = 2410000 + 0.35 * (taxableIncome - 8000000);
        } else if (taxableIncome >= 2000000) {
            incomeTax = 490000 + 0.32 * (taxableIncome - 2000000);
        } else if (taxableIncome >= 800000) {
            incomeTax = 130000 + 0.30 * (taxableIncome - 800000);
        } else if (taxableIncome >= 400000) {
            incomeTax = 30000 + 0.25 * (taxableIncome - 400000);
        } else if (taxableIncome >= 250000) {
            incomeTax = 0.20 * (taxableIncome - 250000);
        }

        // Display result
        taxPayableField.innerText =
            incomeTax > 0 ? `₱ ${incomeTax.toFixed(2)}` : "₱ 0.00";
    });
});
