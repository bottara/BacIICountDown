// Set your target date here (replace with your desired date)
const targetDate = new Date("2024-12-25"); // Change to your event date

const updateCounter = () => {
  const today = new Date();
  const diffInMs = targetDate - today;

  // Calculate days remaining
  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  // Update the counter display
  document.getElementById("day-counter").textContent = days;

  // Optionally, call this function again after a specific interval
  // to keep the counter updated (e.g., every second)
  // setTimeout(updateCounter, 1000); // Update every second
};

updateCounter(); // Call the function initially to display the counter
