class CarouselController {
    constructor() {
        this.carouselImages = document.querySelectorAll(".carouselImage")
    }

    hideImage(image) {
        image.style.display = "none";
    };
}

export default CarouselController;