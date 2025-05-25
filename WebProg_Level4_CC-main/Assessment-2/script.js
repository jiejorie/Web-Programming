// Declaring the variables
let scrollContainer = document.querySelector(".gallery")
let backBtn = document.getElementById("backBtn");  
let nextBtn = document.getElementById("nextBtn");

// Adding an event listener with the "wheel" event
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})

// Event listener that listens for a click from the Next Button, sliding left between the images
nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 460;
})

// Event listener that listens for a click from the Back Button, sliding right between the images
backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 460;
})

// Opens a new tab when the "Download on Steam" button is clicked, directing you to the 2013 version
function DownloadTSP2013() {
    window.open("https://store.steampowered.com/app/221910/The_Stanley_Parable/", "_blank");
}

// Opens a new tab when the "Download on Steam" button is clicked, directing you to the 2022 version
function DownloadTSP2022() {
    window.open("https://store.steampowered.com/app/1703340/The_Stanley_Parable_Ultra_Deluxe/", "_blank");
}

