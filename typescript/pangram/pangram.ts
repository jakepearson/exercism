class Pangram {
    input: string

    constructor(input: string) {
        this.input = input
    }

    isLetter(c: string): boolean {
        return /[a-z]/.exec(c) !== null
    }

    isPangram(): boolean {
        const map = new Set<string>()
        for (let c of this.input) {
            c = c.toLowerCase()
            if (this.isLetter(c)) {
                map.add(c)
            }
        }
        return map.size === 26
    }
}

export default Pangram
