class CarouselController {
    constructor() {
        this.carouselImages = document.querySelectorAll(".carouselImages");
        this.carouselLength = this.carouselImages.length - 1;
        this.imageSelection = 0;
        this.currentImage = this.carouselImages[0];
        this.hideImages();
        this.showImage(this.currentImage)
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