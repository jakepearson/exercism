export default class Triangle {

    sides: number[]

    constructor(...sides: number[]) {
        this.sides = sides.sort((a, b) => {
            if (a < b) {
                return -1
            } else if (a > b) {
                return 1
            } else {
                return 0
            }
        })
    }

    private validate() {
        if (this.sides.some((s) => s < 0)) {
            throw new Error('Negative size')
        }

        if (this.sides.every((s) => s === 0)) {
            throw new Error('All sides 0')
        }

        if (this.sides[0] + this.sides[1] <= this.sides[2]) {
            throw new Error('Not a possible triangle')
        }
    }

    kind(): string {
        this.validate()

        if (this.sides[0] === this.sides[1] &&
            this.sides[0] === this.sides[2]) {
            return 'equilateral'
        }

        if (this.sides[0] === this.sides[1] ||
            this.sides[1] === this.sides[2] ||
            this.sides[2] === this.sides[0]) {
            return 'isosceles'
        }

        return 'scalene'
    }
}