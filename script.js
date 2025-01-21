let m = 6;

function fib() {
    let a = 0, b = 1;
    let count = 0;
    let fibArray = [];  // Use an array to store the Fibonacci numbers

    while (count < m) {  
        fibArray.push(a);  // Store the numbers in the array
        let temp = a + b;
        a = b;
        b = temp;
        count++;
    }

    // Join array elements with a dash and display it in the div
    document.getElementById('fibbox').innerHTML = fibArray.join(' - ');
}

function clearFib() {
    document.getElementById('fibbox').innerHTML = '';
    document.getElementById('ind').innerHTML = '6';
    m = 6
}

document.addEventListener("keydown", function (event) {
    let inputField = document.querySelector("input"); // Select the input field
    if (event.key === "Enter" && document.activeElement === inputField) {
        event.preventDefault(); // Prevent the default behavior of the Enter key

        m = parseInt(inputField.value, 10); // Convert the input value to a number and store it in m
    
        inputField.value = ""; // Clear the input field after pressing Enter
        document.getElementById('ind').innerHTML = (m);

        
    }
});
