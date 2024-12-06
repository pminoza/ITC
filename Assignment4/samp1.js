document.addEventListener('DOMContentLoaded', () => {
    // Get the elements
    const addEmployeeBtn = document.getElementById('addEmployeeBtn');
    const deleteEmployeeBtn = document.getElementById('deleteEmployeeBtn');
    const deleteModal = document.getElementById('deleteModal');
    const confirmationModal = document.getElementById('confirmationModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const confirmDeleteLineBtn = document.getElementById('confirmDeleteLineBtn');
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    const deleteLineNumberInput = document.getElementById('deleteLineNumber');
    const tableBody = document.getElementById('tableBody');
    const noDataRow = document.getElementById('noDataRow');

    // Add Employee Button Functionality
    addEmployeeBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const daysWorked = parseInt(document.getElementById('daysWorked').value);
        const dailyRate = parseFloat(document.getElementById('dailyRate').value);
        const deduction = parseFloat(document.getElementById('deduction').value);

        if (name && !isNaN(daysWorked) && !isNaN(dailyRate) && !isNaN(deduction)) {
            const grossPay = daysWorked * dailyRate;
            const netPay = grossPay - deduction;

            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td></td>
                <td>${name}</td>
                <td>${daysWorked}</td>
                <td>${dailyRate.toFixed(2)}</td>
                <td>${grossPay.toFixed(2)}</td>
                <td>${deduction.toFixed(2)}</td>
                <td>${netPay.toFixed(2)}</td>
            `;

            // Append the new row to the table
            tableBody.appendChild(newRow);

            // Hide the "No data" row if any data exists
            noDataRow.style.display = 'none';

            // Update row numbers
            updateTableRowNumbers();

            // Clear input fields
            document.getElementById('name').value = '';
            document.getElementById('daysWorked').value = '';
            document.getElementById('dailyRate').value = '';
            document.getElementById('deduction').value = '';
        } else {
            alert('Please fill in all fields with valid values.');
        }
    });

    // Delete Employee Button Functionality
    deleteEmployeeBtn.addEventListener('click', () => {
        deleteModal.classList.add('active'); // Show modal with active class
    });

    // Confirm Delete Row Functionality
    confirmDeleteLineBtn.addEventListener('click', () => {
        const rowToDelete = parseInt(deleteLineNumberInput.value);

        if (rowToDelete >= 1 && rowToDelete <= tableBody.rows.length - 1) { // Ensure valid range
            deleteModal.classList.remove('active'); // Hide the delete modal
            confirmationModal.classList.add('active'); // Show confirmation modal
            confirmDeleteBtn.dataset.rowToDelete = rowToDelete;
        } else {
            alert('Invalid row number. Please enter a valid row number.');
        }
    });

    // Confirm Deletion in the Confirmation Modal
    confirmDeleteBtn.addEventListener('click', () => {
        const rowToDelete = parseInt(confirmDeleteBtn.dataset.rowToDelete);

        const rows = Array.from(tableBody.querySelectorAll('tr')).filter(row => row !== noDataRow);

        if (rowToDelete >= 1 && rowToDelete <= rows.length) {
            rows[rowToDelete - 1].remove(); // Delete the selected row
            updateTableRowNumbers();
        }

        if (tableBody.querySelectorAll('tr').length === 1) { // Only "No data" row remains
            noDataRow.style.display = 'table-row';
        }

        confirmationModal.classList.remove('active'); // Hide confirmation modal
        deleteLineNumberInput.value = '';
    });

    // Cancel Deletion
    cancelDeleteBtn.addEventListener('click', () => {
        confirmationModal.classList.remove('active'); // Hide confirmation modal
    });

    // Close the Delete Modal
    closeModalBtn.addEventListener('click', () => {
        deleteModal.classList.remove('active'); // Hide delete modal
        deleteLineNumberInput.value = '';
    });

    // Update table row numbers after adding/deleting rows
    function updateTableRowNumbers() {
        const rows = Array.from(tableBody.querySelectorAll('tr')).filter(row => row !== noDataRow);
        rows.forEach((row, index) => {
            row.cells[0].textContent = index + 1;
        });
    }
});