const menusBtnController = document.querySelector('.menusBtnController');
const backBtn = document.querySelector('.backArrow');
const menuBtn = document.querySelector('.menuBtn');
const counterElement = document.getElementById('counterValue');




// It will togle nav buttons for the mobiles
const togleFunction = () => {
    menusBtnController.classList.toggle('active')
    menuBtn.classList.toggle('opacity-0');
    menuBtn.classList.toggle('opacity-1');
};

// click event to back button
backBtn.addEventListener('click', togleFunction);
// click event to menu button
menuBtn.addEventListener('click', togleFunction);

// create value counter updater functionality--- 
// Set the total value
const totalValue = 19;
let currentValue = 0;

// Calculate the step size based on the total value and animation duration
const stepSize = totalValue / 50; 

// Update the counter using setInterval
const interval = setInterval(() => {
    currentValue += stepSize;

    // Format the current value as currency
    const formattedValue = `$${Math.floor(currentValue.toFixed(2))}`;

    // Update the counter element text
    counterElement.textContent = formattedValue;

    // Stop the interval when the total value is reached
    if (currentValue >= totalValue) {
        clearInterval(interval);
        counterElement.textContent = `$${Math.floor(currentValue.toFixed(2))}`;
    }
}, 50); // Adjust this interval value for smoother or faster animation

