let m = 6;
const inputField = document.getElementById("numGet");

inputField.addEventListener("input", function () {
    m = parseInt(inputField.value, 10) || 6; // Ensure m is a number, default to 6 if empty
});

function fib() {
    let a = 0, b = 1;
    let count = 0;
    let fibArray = [];

    if (m > 1478) {
        m = 1478;
    }

    while (count < m) {
        fibArray.push(a);
        let temp = a + b;
        a = b;
        b = temp;
        count++;
    }

    document.getElementById('fibbox').innerHTML = fibArray.join(' - ');
}

function clearFib() {
    document.getElementById('fibbox').innerHTML = '';
    document.getElementById('numGet').placeholder = '# of Digits';
    m = 6;
}

document.addEventListener("keydown", function (event) {
    let inputField = document.querySelector("input");
    if (event.key === "Enter" && document.activeElement === inputField) {
        event.preventDefault();
        let value = parseInt(inputField.value, 10);
        if (!isNaN(value)) {  // Ensure a valid number is entered
            m = value;
            document.getElementById('fibbox').innerHTML = '';
            fib();
        }
        inputField.value = "";
        inputField.placeholder = m;
    } else if (event.key === "Escape") { // Clear on Escape key
        clearFib();
    }
});
