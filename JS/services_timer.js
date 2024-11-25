// Set the target date and time
const targetDate = new Date('2030-12-31T23:59:59').getTime(); // Set to Dec 31, 2024

// Update the countdown every second
const timerInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calculate time components
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Get the target year
  const targetYear = new Date(targetDate).getFullYear();

  // Display the result in the #timer element
  document.getElementById("timer").textContent = 
    `${days} days ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} (Year: ${targetYear})`;

  // If the countdown is over, stop the timer and show a message
  if (distance < 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "The LogiCore App is now Available!";
  }
}, 1000);