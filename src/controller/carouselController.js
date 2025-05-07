class CarouselController {
    constructor() {
        this.carouselImage = document.querySelectorAll(".carouselImage")
        console.log(this.carouselImage)
    }

    hideImage(image) {
        image.style.display = "none";
    }
}

export default CarouselController;