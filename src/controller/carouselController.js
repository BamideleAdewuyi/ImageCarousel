class CarouselController {
    constructor() {
        this.carouselImages = document.querySelectorAll(".carouselImages")
        this.hideImages();
    }

    showImage(image) {
        image.style.display = "block";
    }

    hideImage(image) {
        image.style.display = "none";
    };

    hideImages() {
        for (const image of this.carouselImages) {
            this.hideImage(image);
        }
    }
}

export default CarouselController;