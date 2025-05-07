class CarouselController {
    constructor() {
        this.carouselImages = document.querySelectorAll(".carouselImages");
        this.carouselLength = this.carouselImages.length - 1;
        this.counter = 0;
        this.currentImage = this.carouselImages[this.imageIndex];
        this.hideImages();
        this.showImage(this.currentImage);
    };

    showImage(image) {
        image.style.display = "block";
    };

    hideImage(image) {
        image.style.display = "none";
    };

    hideImages() {
        for (const image of this.carouselImages) {
            this.hideImage(image);
        }
    };

    getCurrentImage(counter) {
        const currentImageIndex = counter % this.carouselLength;

        return currentImageIndex;
    };
}

export default CarouselController;