document.addEventListener("DOMContentLoaded", function() {
    const images = ["one.svg","two.svg","three.svg"]; 
    let currentIndex = 0; 
  
    const imageSlider = document.getElementById("imageSlider");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
  
    
    function updateImage() {
      imageSlider.src = images[currentIndex];
    }
  
    
    prevButton.addEventListener("click", function() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 1; 
      }
      updateImage(); 
    });
  
    
    nextButton.addEventListener("click", function() {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0; 
      }
      updateImage(); 
    });
  });
  

  



