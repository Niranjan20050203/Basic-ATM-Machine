let accNo = 7676;
let pinNo = 1234;
let balance = 5000;

const screen = document.querySelector(".screen");
const accInput = document.querySelector('input[placeholder="Account Number"]');
const pinInput = document.querySelector('input[placeholder="PIN"]');
const amtInput = document.querySelector('input[placeholder="Amount"]');

function validateUser() {
    if (accInput.value == "" || pinInput.value == "") {
        screen.innerHTML = "<p>Enter Account Number and PIN</p>";
        return false;
    }
    if (parseInt(accInput.value) !== accNo) {
        screen.innerHTML = "<p>Enter correct Account Number !!!</p>";
        return false;
    }
    if (parseInt(pinInput.value) !== pinNo) {
        screen.innerHTML = "<p>Enter correct PIN !!!</p>";
        return false;
    }
    return true;
}

function withdraw() {
    if (!validateUser()) return;

    let amt = parseInt(amtInput.value);
    if (amt <= 0) {
        screen.innerHTML = "<p>Enter valid amount</p>";
    } else if (amt > balance) {
        screen.innerHTML = "<p>Insufficient Balance !!!</p>";
    } else {
        balance -= amt;
        screen.innerHTML = `<p>Withdrawal Successful</p><p>Balance : ₹${balance}</p>`;
    }
}

function deposit() {
    if (!validateUser()) return;

    let amt = parseInt(amtInput.value);
    if (amt <= 0) {
        screen.innerHTML = "<p>Enter valid amount</p>";
    } else {
        balance += amt;
        screen.innerHTML = `<p>Deposit Successful</p><p>Balance : ₹${balance}</p>`;
    }
}

function checkBalance() {
    if (!validateUser()) return;
    screen.innerHTML = `<p>Your Current Balance : ₹${balance}</p>`;
}

function exitATM() {
    accInput.value = "";
    pinInput.value = "";
    amtInput.value = "";
    screen.innerHTML = "<p>Thank you !!!</p>";
}

document.querySelectorAll(".buttons button")[0].onclick = withdraw;
document.querySelectorAll(".buttons button")[1].onclick = deposit;
document.querySelectorAll(".buttons button")[2].onclick = checkBalance;
document.querySelectorAll(".buttons button")[3].onclick = exitATM;
