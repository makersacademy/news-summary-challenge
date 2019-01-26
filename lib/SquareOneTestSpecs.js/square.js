class Square {
    constructor(size) {
        if (isNaN(size)) {
            throw new Error('argument is not a number');
        }
        if (size < 0) {
            throw new Error('size should be a positive number');
        }
        this.size = size;
    }

    area() {
        return this.size * this.size;
    }

}
