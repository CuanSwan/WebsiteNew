const allElements = document.querySelectorAll(".carousel");
const imageIndex = 0;

function carouselControl(imageIndex) {
    allElements.forEach(image, index => {
        if (index === imageIndex){
            image.classList.remove("carousel")
            image.classList.add("hidden")
        }else{
            image.classList.add("carousel")
        }
        
    })
}


function nextSlide(){
    carouselControl(imageIndex++)
}

function prevSlide(){
    carouselControl(imageIndex--)
}

