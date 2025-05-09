class CarouselController {
    constructor() {
        this.carousel = document.querySelector(".carousel");
        this.navigationDots = document.querySelector(".navigationDots");
        this.carouselImages = document.querySelectorAll(".carouselImages");
        this.leftArrow = document.querySelector("#leftArrow");
        this.rightArrow = document.querySelector("#rightArrow");
        this.carouselLength = this.carouselImages.length;
        this.counter = 0;
        this.currentImage = this.getCurrentImage();
        this.hideImages();
        this.showImage(this.currentImage);
        this.createDots();
        this.addListeners()
    };

    addListeners() {
        this.leftArrow.addEventListener("click", () => {
            this.hideImages();
            this.previous();
            this.showImage(this.currentImage);
        })

        this.rightArrow.addEventListener("click", () => {
            this.hideImages();
            this.next();
            this.showImage(this.currentImage);
        })
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
        this.currentImage = this.getCurrentImage();
    };

    previous() {
        if (this.counter == 0) {
            this.counter = this.carouselLength - 1;
        }
        else {
            this.counter -= 1;
        }
        this.currentImage = this.getCurrentImage();
    }

    createDots() {
        for (let i = 0; i < this.carouselLength; i++) {
            const dot = document.createElement("span")
            dot.classList.add("navigationDot");
            this.navigationDots.append(dot)
        }
    }
}

export default CarouselController;