// Array to hold transaction objects
const transactions = [];

// Helper to format numbers as currency
function formatCurrency(amount) {
  return '$' + amount.toFixed(2);
}

// Function to update summary values
function updateSummary() {
  let totalIncome = 0, totalExpense = 0;
  transactions.forEach(tx => {
    if (tx.type === 'income') {
      totalIncome += tx.amount;
    } else {
      totalExpense += tx.amount;
    }
  });
  document.getElementById('total-income').textContent = formatCurrency(totalIncome);
  document.getElementById('total-expense').textContent = formatCurrency(totalExpense);
  document.getElementById('net-balance').textContent = formatCurrency(totalIncome - totalExpense);
}

// Function to render the transaction table
function renderTransactions() {
  const tbody = document.getElementById('transaction-list');
  tbody.innerHTML = ''; // Clear previous rows
  transactions.forEach((tx, index) => {
    const tr = document.createElement('tr');

    // Date cell
    const tdDate = document.createElement('td');
    tdDate.textContent = tx.date.toLocaleDateString();
    tr.appendChild(tdDate);

    // Description cell
    const tdDesc = document.createElement('td');
    tdDesc.textContent = tx.description;
    tr.appendChild(tdDesc);

    // Type cell
    const tdType = document.createElement('td');
    tdType.textContent = tx.type.charAt(0).toUpperCase() + tx.type.slice(1);
    tr.appendChild(tdType);

    // Amount cell
    const tdAmount = document.createElement('td');
    tdAmount.textContent = formatCurrency(tx.amount);
    tr.appendChild(tdAmount);

    // Action cell (delete button)
    const tdAction = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
      transactions.splice(index, 1);
      renderTransactions();
      updateSummary();
    });
    tdAction.appendChild(deleteBtn);
    tr.appendChild(tdAction);

    tbody.appendChild(tr);
  });
}

// Handle form submission
document.getElementById('transaction-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const description = document.getElementById('description').value.trim();
  const amountValue = parseFloat(document.getElementById('amount').value);
  const type = document.getElementById('type').value;

  if (!description || isNaN(amountValue)) {
    alert('Please enter valid details.');
    return;
  }
  
  const transaction = {
    description: description,
    amount: amountValue,
    type: type,
    date: new Date()
  };

  transactions.push(transaction);
  renderTransactions();
  updateSummary();
  
  // Clear form inputs
  this.reset();
});
