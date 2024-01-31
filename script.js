function myFunction() {
  alert("Hello World!");
}



const sliderContainer = document.querySelector('.slider-container');

function scrollDown() {
  sliderContainer.scrollTop += 10; // Adjust scroll speed as needed
  requestAnimationFrame(scrollDown);
}

scrollDown();
