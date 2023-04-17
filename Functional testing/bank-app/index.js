const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform validation checks
    if (email === 'admin@gmail.com' && password === 'A@1bcdef') {
        const loginArea = document.getElementById('login-area');
        loginArea.style.display = 'none';
        const transactionArea = document.getElementById('transaction-area');
        transactionArea.style.display = 'block';
    } else {
        alert('Invalid login credentials. Please try again.');
    }
});



// Deposit Button Event Handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {
	// const depositAmount = document.getElementById('depositAmount').value;
	// const depositNumber = parseFloat(depositAmount);
	const depositNumber = getInputNumber('depositAmount');

	// const currentDeposit = document.getElementById('currentDeposit').innerText;
	// const currentDepositNumber = parseFloat(currentDeposit);
	// const totalDeposit = depositNumber + currentDepositNumber;
	// // console.log(totalDeposit);
	// document.getElementById('currentDeposit').innerText = totalDeposit;

	updateSpanText('currentDeposit', depositNumber);
	updateSpanText('currentBalance', depositNumber);

	document.getElementById('depositAmount').value = '';
});

// Withdraw Button Event Handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {
	// const withdrawAmount = document.getElementById('withdrawAmount').value;
	// console.log(withdrawAmount);
	// const withdrawNumber = parseFloat(withdrawAmount);

	const withdrawNumber = getInputNumber('withdrawAmount');
	// console.log(withdrawNumber);

	updateSpanText('currentWithdraw', withdrawNumber);
	updateSpanText('currentBalance', -1 * withdrawNumber);

	document.getElementById('withdrawAmount').value = '';
});

function getInputNumber(id) {
	const withdrawAmount = document.getElementById(id).value;
	// console.log(withdrawAmount);
	const withdrawNumber = parseFloat(withdrawAmount);
	return withdrawNumber;
}

function updateSpanText(id, depositNumber) {
	const currentBalance = document.getElementById(id).innerText;
	const currentBalanceNumber = parseFloat(currentBalance);
	const totalBalance = depositNumber + currentBalanceNumber;
	document.getElementById(id).innerText = totalBalance;
}
function addTransfer() {
    var recipientAccountNumber = document.getElementById("recipientAccountNumber").value;
    var transferAmount = parseFloat(document.getElementById("transferAmount").value);
    var currentBalance = parseFloat(document.getElementById("currentBalance").textContent);
    if (transferAmount > 0 && currentBalance >= transferAmount) {
        currentBalance -= transferAmount;
        document.getElementById("currentBalance").textContent = currentBalance.toFixed(2);
        document.getElementById("transferAmount").value = "";
        alert("Transfer successful!");
    } else {
        alert("Invalid transfer amount or insufficient balance!");
    }
}
document.getElementById("addTransfer").addEventListener("click", addTransfer);

const updateButton = document.getElementById("update-info");

updateButton.addEventListener("click", function() {
  const name = prompt("Enter your name:");
  const address = prompt("Enter your address:");
  const phone = prompt("Enter your phone number:");

  if (name && address && phone && phone.match(/^\d{10}$/)) {
    const nameCell = document.getElementById("name-cell");
    const addressCell = document.getElementById("address-cell");
    const phoneCell = document.getElementById("phone-cell");
    
    nameCell.innerHTML = name;
    addressCell.innerHTML = address;
    phoneCell.innerHTML = phone;
  } else {
    alert("Please enter valid information, including a 10-digit phone number.");
  }
});

const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", function() {
  // clear the user's session and redirect them to the login page
   window.location.href = "http://127.0.0.1:5501/bank-app/index.html";
  
  // close the current window/tab
 
});




