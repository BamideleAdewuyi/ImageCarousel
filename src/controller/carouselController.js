class CarouselController {
    constructor() {
        this.carouselImages = document.querySelectorAll(".carouselImages");
        this.leftArrow = document.querySelector("#leftArrow");
        this.rightArrow = document.querySelector("#rightArrow");
        this.carouselLength = this.carouselImages.length - 1;
        this.counter = 0;
        this.currentImage = this.getCurrentImage();
        this.hideImages();
        this.showImage(this.currentImage);
    };

    addListeners() {
        
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

    getCurrentImageIndex(counter) {
        const currentImageIndex = counter % this.carouselLength;
        return currentImageIndex;
    };

    getCurrentImage() {
        const currentImage = this.carouselImages[this.getCurrentImageIndex(this.counter)]
        return currentImage;
    };

    next() {
        this.counter += 1;
        const nextImage = this.getCurrentImage();
        return nextImage;
    };

    previous() {
        this.counter -= 1;
        const previousImage = this.getCurrentImage();
        return previousImage;
    }
}

export default CarouselController;