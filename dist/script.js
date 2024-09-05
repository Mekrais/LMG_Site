// List of background images
const images = [
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/375820/ss_48cad8f74bae909b10040b543fc4f83f70374d5a.1920x1080.jpg",
  "https://via.placeholder.com/1920x1080/ff7f7f/333333?text=Second+Image",
  "https://via.placeholder.com/1920x1080/7f7fff/333333?text=Third+Image",
];

// Variables to track the current image index
let currentIndex = 0;

// Get the container element
const carouselContainer = document.getElementById("carousel-container");

// Get the buttons
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");

// Function to update the background image
function updateBackground() {
  carouselContainer.style.backgroundImage = `url('${images[currentIndex]}')`;
}

// Event listeners for next and previous buttons
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length; // Cycle forward
  updateBackground();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Cycle backward
  updateBackground();
});

// let autoCycle = setInterval(() => {
//   currentIndex = (currentIndex + 1) % images.length;
//   updateBackground();
// }, 7000);
